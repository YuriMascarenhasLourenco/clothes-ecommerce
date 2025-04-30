'use client'

import { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import axios from "axios";
import { LoginResponse } from "../interfaces/loginResponse";
import { redirect } from "next/dist/server/api-utils";
import { api } from "../services/api";
import next from "next";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {  
    const [email, setEmail] = useState('');
    const router = useRouter()
    const [password, setPassword] = useState('');

    const {login, fetchUser}= useAuthStore();
   
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        try {
            console.log(email, password);
            const response =  await api.post('/auth/login', 
                { email,password });
                console.log("res:", response.data);
           const  data  = response.data as LoginResponse
            login(data.access_token); 
         fetchUser();
         
         router.push('/')
            
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    
    };
    
    return (
        <div
            className="flex flex-col justify-center items-center h-screen w-full
            text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-80 bg-gray-900 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded-md bg-gray-700 text-gray-300"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 rounded-md bg-gray-700 text-gray-300"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button
                        type="submit"
                        className="bg-teal-600 text-white p-2 rounded-md"
                    >
                        Login
                    </button>
                    <a href="/create" className="text-blue-700 text-xs">i do not have an account</a>
                </form>
            </div>
        </div>
    );
}