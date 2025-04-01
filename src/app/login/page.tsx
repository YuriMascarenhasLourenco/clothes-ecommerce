'use client'
import { LoginUser } from "../components/login";
import { useState } from "react";

export default function Login() {  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        const success = await LoginUser(email, password);
        if (success) {
            console.log("Login realizado com sucesso!");
        } else {
            console.error("Erro ao realizar login.");
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
                </form>
            </div>
        </div>
    );
}