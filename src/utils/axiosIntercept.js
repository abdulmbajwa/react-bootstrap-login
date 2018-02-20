import axios from "axios";
let retry = false;
const intercept = (store,logoutAction)=>{
    axios.interceptors.response.use((response) => { // intercept the global error
        return response
    }, function (error) {
        if (error.response.status === 401 && !retry) { // if the error is 401 and hasent already been retried
            retry = true; // now it can be retried
            store.dispatch(logoutAction());
        }
        if (error.response.status === 404 && !retry) {
            retry = true;
            return
        }
        // Do something with response error
        return Promise.reject(error)
    });
};
export default intercept;