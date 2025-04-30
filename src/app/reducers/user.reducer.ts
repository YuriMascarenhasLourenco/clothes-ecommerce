export interface UserState {
    name: string;
    email: string;
    password: string;
}

// Define o tipo das ações
export type UserAction =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string };
 
 export const reducer = (state:UserState, action:UserAction) => {
        switch (action.type) {
            case 'SET_NAME':
                return { ...state, name: action.payload };
            case 'SET_EMAIL':
                return { ...state, email: action.payload };
            case 'SET_PASSWORD':
                return { ...state, password: action.payload };
            default:
                return state;
        }
    };

  export  const initialState:UserState = {
            name: '',
            email: '',
            password: '',
        };
    