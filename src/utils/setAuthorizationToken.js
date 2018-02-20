import axios from 'axios';

export default function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem("token",token);
    } else {
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem("token",token);
    }
}