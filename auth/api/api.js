import axios from "axios";

const ServerAuth = "http://localhost:3000/api";
const AuthGuery = axios.create({
    withCredentials: true,
    baseURL: ServerAuth,
    headers: {
        'Content-Type': "application/json;charset=utf-8"
    }
});


export const AuthAPI = {
    Login: (username, password) => {
        let data = JSON.stringify({ username, password });
        return AuthGuery.post('Auth/Login', data)
            .then(response => {
                console.log(response);
                return response;
            }).catch(error => {
                console.log(error);
            })
    },
    Logout: () => {
        return AuthGuery.post('Auth/Logout')
            .then(response => {
                console.log(response);
                return response;
            }).catch(error => {
                return error;
            })
    },
    Profile: () => {
        return AuthGuery.post('secret')
            .then(response => {
                console.log(response);
                return response;
            }).catch(error => {
                return error;
            })
    },
}