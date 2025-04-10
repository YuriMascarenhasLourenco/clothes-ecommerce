import { api } from "../services/api";


export default function CartPage() {
    const cartItems= async()=>{
        const items = api.get('/cart')
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-gray-300">
            <div className="flex flex-col justify-center items-center w-80 bg-gray-900 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Cart</h1>
                <p>Your cart is empty.</p>
            </div>
        </div>
    );
}