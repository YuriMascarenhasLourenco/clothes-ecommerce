'use client'
import { api } from "@/app/services/api"
import { productType } from "@/types/productType"
import { useEffect, useState } from "react"

export default function Stocks(){
    const[products,setProducts]= useState<productType[]>([])
    const getStocks=async()=>{
        try{
            const stocks= await api.get<productType[]>('/product')
            setProducts(stocks.data)
            console.log('stocks:', stocks)
        }catch(err){
            console.error('Erro ao buscar produtos:', err)
        }
    }
    useEffect(()=>{
        getStocks()
    },[])
    return(
        <div className="bg-white w-screen h-screen">
            <h1 className="text-2xl  mb-4 text-center mt-3">Stocks</h1>
            <div className="flex flex-col items-center ">
                <div className="border-black p-4 flex justify-center gap-5 rounded-lg shadow-md  text-black w-2/5">
            {products && products.map((item) => (
                             <div className="flex flex-col gap-4" key={item.id}>
                                 <div className="flex flex-col">
                                     <label className="font-bold text-sm ">Name</label>
                                     <p className="text-lg">{item.name}</p>
                                 </div>
                                 <div className="flex flex-col">
                                     <label className="font-bold text-sm">Price</label>
                                     <p className="text-lg">{item.price}</p>
                                 </div>
                                 <div className="flex flex-col items-center">
                                     <label className="font-bold text-sm mb-1 ">Stock</label>
                                     <p>{item.stock}</p>
                                 </div>
                             </div>
                            ))}  
                </div>
            </div>
            <div className="flex flex-col items-center ">

            </div>
        </div>
    )
}