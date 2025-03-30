import { productType } from "@/types/productType"
import { ProductImage } from "./productImage"
type Props = {
    product: productType    
}  
export const ProductList =  ({product}:Props) => { 
    return (
                <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300" key={product.id}>
                    <div className="flex max-h-72 flex-1">
                       <ProductImage fill
                       image={product} /> 
                    </div>
                    <div className="flex justify-between font-bold my-3">
                        <p className="w-40 truncate"> {product.name}</p>
                        
                    </div>              
                    <div className="">
                        <p className="text-md text-teal-300"> {product.price}</p>
                        
                    </div>
                    <button className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">Adicionar ao carrinho</button>
                </div>
        )
}