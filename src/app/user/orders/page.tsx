'use client'
import { Aside } from "@/app/components/aside";
import { api } from "@/app/services/api";
import { cartProductType } from "@/types/cartProductType";
import { useEffect, useState } from "react";

export default  function OrdersPage() {
    const[ordered,setOrdered]=useState<cartProductType[]>([])
    const orderUser = async () => {
        try {
            const orders = await api.get<cartProductType[]>('/cart/all');
            setOrdered(orders.data);
        } catch (error) {
            console.error('Erro ao buscar pedidos:', error);
        }
    };
    useEffect(()=>{
        orderUser()
    },[])
    
    return(
        <div className="flex h-screen w-screen bg-gray-100">
            <Aside/>

            <div>
                <h1 className="text-2xl mb-4 text-center">Orders</h1>
                {ordered.map((item) => (
                    <div key={item.id} className="border-black p-4 flex justify-center gap-5 rounded-lg shadow-md  text-black w-2/5">
                        <div className="flex flex-col ">
                            <label className="font-bold text-sm ">Name</label>
                            <p className="text-lg">{item.name}</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-sm">Price</label>
                            <p className="text-lg">${item.price}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <label className="font-bold text-sm mb-1 ">Quantity</label>
                            <div className="flex gap-3">
                                <button className="w-6 border border-black rounded-lg ">-</button>
                                <div>{item.quantity}</div>
                                <button className="w-6 border border-black rounded-lg">+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}