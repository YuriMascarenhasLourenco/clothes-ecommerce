import axios from "axios";
import { error } from "console";

export const api= axios.create({
    baseURL: "http://localhost:5050",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        if(!config.headers) config.headers =  {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
}
);