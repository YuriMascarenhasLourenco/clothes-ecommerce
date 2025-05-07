'use client';

import { Aside } from "@/app/components/aside";
import { initialState, reducer } from "@/app/reducers/user.reducer";
import { api } from "@/app/services/api";
import { useAuthStore } from "@/app/stores/authStore";
import { useReducer } from "react";

export default function Dashboard() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const{user}= useAuthStore()
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const id= JSON.parse(localStorage.getItem('auth-store')as string).state.user.id as number
        await api.patch(`user/${id}`, {
            name: state.name,
            email: state.email,
            password: state.password,
        });
    }
    return (
        <div className="flex h-screen w-full bg-gray-100">
            {/* Sidebar */}
            <Aside/>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold mb-6">Profile</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-xl font-bold mb-4">Current User Information</h2>
                    <div className="space-y-2">
                        <p>
                            <span className="font-bold">Username:</span> {user?.name}
                        </p>
                        <p>
                            <span className="font-bold">Email:</span> {user?.email}
                        </p>
                      
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Update Your Profile</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Username"
                            className="p-2 rounded-md bg-gray-100 border border-gray-300"
                            value={state.name}
                            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 rounded-md bg-gray-100 border border-gray-300"
                            value={state.email}
                            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 rounded-md bg-gray-100 border border-gray-300"
                            value={state.password}
                            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}