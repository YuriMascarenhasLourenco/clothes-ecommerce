import { productType } from "@/types/productType"
type Props = {
    product: productType    
}  
export const ProductList =  ({product}:Props) => { 
    return (
                <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300" key={product.id}>
                    <div className="flex max-h-72 flex-1">
                        IMG
                    </div>
                    <div className="flex justify-between font-bold my-3">
                        {product.name}
                    </div>              
                    <div className="">
                        {product.price}
                    </div>
                    <button className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">Adicionar ao carrinho</button>
                </div>
        )
}