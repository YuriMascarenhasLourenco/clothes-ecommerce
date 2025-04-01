"use client"
import { productType } from "@/types/productType"
import { ProductImage } from "./productImage"
import { formatPrice } from "@/lib/utils"
type Props = {
    product: productType    
}  
export const ProductList =  ({product}:Props) => { 
    return (
                <div className="flex flex-col shadow-lg h-auto w-80  bg-slate-800 p-5 text-gray-300 bg-slate-00 rounded-lg overflow-hidden  " key={product.id}>
                    <div className="flex max-h-72 flex-1">
                       <ProductImage fill={true}
                       image={product} /> 
                    </div>
                    <div className="flex justify-between font-bold my-3">
                        <p className="w-auto truncate"> {product.name}</p>
                        
                    </div>              
                    <div className="">
                        <p className="text-md text-teal-300"> {formatPrice(product.price) }</p>
                        
                    </div>
                    <button className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">Add to cart</button>
                </div>
        )
}