'use client'
import axios from "axios";

export const api= axios.create({
    baseURL: "http://localhost:5050",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth-store") ? 
    JSON.parse(localStorage.getItem("auth-store")!)
    .state.token : null;
    
    if (token) {
        if(!config.headers) config.headers =  {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
}
);