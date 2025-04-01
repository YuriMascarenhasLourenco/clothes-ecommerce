import { useAuthStore } from "../stores/authStore";
import axios from "axios";
interface LoginResponse {
    access_token: string;
}

export const LoginUser = async (email: string, password: string) => {
    
    try {
        console.log(email, password);
        const response = await axios.post('http://localhost:5050/auth/login', 
            { email,password });
            console.log("res:", response);
        const { access_token } = response.data as LoginResponse;
        console.log('Token de acesso:', access_token);
        useAuthStore.getState().login(access_token);
    
        return true;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return false;
    }
}