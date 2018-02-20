import jwt_decode from 'jwt-decode';
import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import querystring from "querystring";

const USER_IS_LOADING = "USER_IS_LOADING";
const USER_AUTHENTICATED = "USER_AUTHENTICATED";
const USER_SET = "USER_SET";
export const actionCreators = {
    loginUser: state => async (dispatch, getState) => {
        if (getState().userAuthentication.isLoading) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }
        try {
            dispatch({type: USER_IS_LOADING, isLoading: true});
            const url = `/connect/token`;
            const response = await axios.post(url, querystring.stringify({
                username: state.username,
                password: state.password,
                grant_type: "password"
            }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            const token = response.data;
            setAuthorizationToken(token.access_token);
            let user = jwt_decode(token.access_token);
            dispatch({type: USER_AUTHENTICATED, isAuthenticated: true});
            dispatch({type: USER_SET, user});
            dispatch({type: USER_IS_LOADING, isLoading: false});
        }
        catch (e) {
            dispatch({type: USER_IS_LOADING, isLoading: false});
            throw e;
        }
    },
    logoutUser: () => async (dispatch, getState) => {
        setAuthorizationToken(false);
        dispatch({type: USER_AUTHENTICATED, isAuthenticated: false});
        dispatch({type: USER_SET, user: null});
        dispatch({type: USER_IS_LOADING, isLoading: false});

    },
    setUser: user => async (dispatch, getState) => {
        dispatch({type: USER_SET, user});
        dispatch({type: USER_AUTHENTICATED, isAuthenticated: true});
    }
};

const initialState = {
    user: {},
    isLoading: false,
    isAuthenticated: false
};

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case USER_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case USER_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
        case USER_SET:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};