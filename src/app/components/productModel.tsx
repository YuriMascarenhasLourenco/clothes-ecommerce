'use client";'
import Image from "next/image";
import { useState } from "react";
import { api } from "../services/api";
import { parse } from "path";
import { addProductCart } from "@/types/addProductCart";

export type Props = {
    product: {
      id: number;
      name: string;
      price: number;
      description: string;
      image: string;
    };
    onClose: () => void;
  };
  
  export default function ProductModel({ product, onClose }: Props) {
    const [quantity, setQuantity] = useState<number>(1);
    const userId= localStorage.getItem('auth-store') as string
    const addToCart = async (productId:number) => {
        const iduser= JSON.parse(userId).state.user.id as string
        const cartItem = {
            productId,
            quantity,
        };
        console.log('cartItem', cartItem)
        console.log('userId', iduser)
        const sendToCart = await api.post<addProductCart>(
            `/cart/add/${iduser}`,
             cartItem , 
            
          );
          console.log('sendToCart', sendToCart.data)
        onClose()
    }
    return (
      <div className="w-96 max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center ">
        <div className="relative h-64 w-full">
          <Image
          width={500}
            height={500}
            src={product.image}
            alt={product.name}
            className="object-cover h-full w-full"
          />
          <div onClick={onClose} className="absolute top-2 right-2 cursor-pointer bg-gray-200 rounded-full p-1">
            X
          </div>
        </div>
  
        <div className="p-6 text-gray-800">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-4">{product.description}</p>

          <div className="flex justify-between items-center mb-4">

            <div className="flex items-center gap-2">
                <p className="text-xl text-teal-600 font-semibold">
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(product.price)}
                </p>

            </div>

            <div className="flex items-center gap-2">
                <label htmlFor="quantity" className="text-sm text-gray-600">Quantity</label>
                <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                min={1}
                />
            </div>
    </div>

         
          <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition" onClick={()=>addToCart(product.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  