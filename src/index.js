import 'material-design-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.min.css';
import './assets/css/fontastic.css';
import './assets/css/style.default.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from "./utils/setAuthorizationToken";
import {actionCreators} from "./store/UserAuthentication";
import jwt_decode from "jwt-decode";
import intercept from "./utils/axiosIntercept";
// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({basename: baseUrl});

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
intercept(store, actionCreators.logoutUser);
const rootElement = document.getElementById('root');
if (localStorage.token) {
    setAuthorizationToken(localStorage.token);
    let user = jwt_decode(localStorage.token);
    store.dispatch(actionCreators.setUser(user));
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    rootElement);

registerServiceWorker();
