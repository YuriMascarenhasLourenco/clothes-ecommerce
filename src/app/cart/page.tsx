'use client';
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { cartProductType } from "@/types/cartProductType";
import { deleteItem } from "../helpers/deleteItem";
import { deleteCart } from "../helpers/deleteCart";


export default function CartPage() {
    const[data,setData]= useState<cartProductType[]>([])
    const[total,setTotal]= useState<number>(0)
    const cartItems= async()=>{
        try{
            const id= JSON.parse(localStorage.getItem('auth-store')as string).state.user.id as number
            console.log('id:', id)
            const items = await api.get<cartProductType[]>(`/cart/${id}`)
            console.log('items:', items)
            const itemsData =  items.data
            console.log('itemsData:', itemsData)
            console.log('type of cartId', typeof itemsData[0].cartId)
            const calculatedTotal = itemsData.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotal(calculatedTotal);
            setData(itemsData)
        }catch(err){
            console.error('Erro ao buscar produtos:', err)
        }
        
    }

    useEffect(() => {
        cartItems()
        console.log('rwnderização de página')
    },[])
    console.log('data',data)
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-gray-300">
        <div className="  w-screen h-screen bg-white p-8 rounded-lg shadow-lg text-black">
            <h1 className="text-2xl  mb-4 text-center">Cart</h1>
            {data.length > 0 ? (
                <div className="flex flex-col items-center ">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="border-black p-4 flex justify-center gap-5 rounded-lg shadow-md  text-black w-2/5"
                        >
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
                            <div>
                                <button className="bg-red-500 w-40 h-8 rounded-md mt-3" onClick={()=>deleteItem(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end gap-2 p-4 shadow-md w-2/5 justify-items-end border-black rounded-md">
                        <h2 className="font-bold">Total</h2>
                         <p>${total} </p>
                    </div>
                   <div className=" flex gap-3 w-screen justify-center mt-2">
                        <button className=" bg-teal-400 w-40 h-8 rounded-md items-end "> Buy</button>
                        <button className=" bg-red-500 w-40 h-8 rounded-md items-end " onClick={()=>deleteCart(data)}> Delete All Cart</button>
                   </div>
                </div>
            ) : (
                <p className="text-center">Your cart is empty.</p>
            )}
        </div>
    </div>
    );
}