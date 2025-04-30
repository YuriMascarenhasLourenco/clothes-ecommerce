'use client';
import { FormEvent, useReducer } from 'react';
import { initialState, reducer } from '../reducers/user.reducer';
import { api } from '../services/api';
import { newUser } from '@/types/newUser';

export default function CreateAccount() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Função para criar uma nova conta
    const newAccount = async(e:FormEvent) => {
        e.preventDefault();
        console.log('Creating account with:', state);
        const newUser= await api.post<newUser>('/user',{
            name:state.name,
            email:state.email,
            password: state.password,
            role: 'user'
        })
    };

    return (
        <div
            className="flex flex-col justify-center items-center h-screen w-full
            text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-80 bg-gray-900 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">New User</h1>
                <form onSubmit={newAccount} className="flex flex-col space-y-4 w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 rounded-md bg-gray-700 text-gray-300"
                        required
                        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                        value={state.name}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded-md bg-gray-700 text-gray-300"
                        required
                        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                        value={state.email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 rounded-md bg-gray-700 text-gray-300"
                        required
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                        value={state.password}
                    />
                    <button
                        type="submit"
                        className="bg-teal-600 text-white p-2 rounded-md"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}