import axios from 'axios';

const token = localStorage.getItem('token');

export const server = axios.create({
    baseURL: `http://0.0.0.0:4000/`,
    headers: {
        'Authorization': token
    }
});

export const setAuthorizationToken = ({token}) => {
    server.defaults.headers['Authorization'] = token;
}
