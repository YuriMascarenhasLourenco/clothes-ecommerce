'use client'

import { useState } from "react";
import { api } from "../services/api";
import { productType } from "@/types/productType";
import { createProductType } from "@/types/createProductType";
import { parse } from "path";

export default function NewProduct() {
    const[productName, setProductName] = useState('');
    const[productPrice, setProductPrice] = useState(0);
    const[productDescription, setProductDescription] = useState('');
    const[productStock, setProductStock] = useState(0);
    const[productImage, setProductImage] = useState('');
    const createProduct = async (e:React.FormEvent) => {
        e.preventDefault();
     const req= await  api.post<createProductType>('/product/add', {
            name: productName,
            price: productPrice,
            description: productDescription,
            stock: productStock,
            image: productImage,
        })
        const data= req.data 
         console.log("data:", data);
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-gray-300">
        <div className="flex flex-col justify-center items-center w-80 bg-gray-900 p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">New Product</h1>
            <form onSubmit={createProduct} className="flex flex-col space-y-4 w-full max-w-sm">
            <input
                type="text"
                placeholder="Product Name"
                className="p-2 rounded-md bg-gray-700 text-gray-300"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
                required
            />
            <input
                type="number"
                placeholder="Product Price"
                className="p-2 rounded-md bg-gray-700 text-gray-300"
                onChange={(e) => setProductPrice(parseInt(e.target.value))}
                value={productPrice}
                required
            />
            <input
                type="text"
                placeholder="Product Description"
                className="p-2 rounded-md bg-gray-700 text-gray-300"
                onChange={(e) => setProductDescription(e.target.value)}
                value={productDescription}
                required
            />
            <input
                type="number"
                placeholder="stock"
                className="p-2 rounded-md bg-gray-700 text-gray-300"
                onChange={(e) => setProductStock(parseInt(e.target.value))}
                value={productStock}
                 />
            <input type="text"
            placeholder="image link"
             className="p-2 rounded-md bg-gray-700 text-gray-300"
             onChange={(e) => setProductImage(e.target.value)}
                value={productImage}
            />
            <button
                type="submit"
                className="bg-teal-600 text-white p-2 rounded-md"
            >
                Add Product
            </button>
            </form>
        </div>
        </div>
    );
}