"use client";

import { useState } from "react";
import { productType } from "@/types/productType";
import { ProductImage } from "./productImage";
import { formatPrice } from "@/lib/utils";
import { api } from "../services/api";
import ProductModel from "./productModel";


type Props = {
  product: productType;
};

export const ProductList = ({ product }: Props) => {
  const [switchModel, setSwitchModel] = useState(false);
  const [productData, setProductData] = useState<productType | null>(null);

  const handleModel = async (id: number) => {
    try {
      const productModel = await api.get(`/product`,{
        params: { id },
      });
      const data = productModel.data;
      console.log("Product fetched:", data);
      setSwitchModel(true);
    } catch (err) {
      console.error("Erro ao buscar produto:", err);
    }
    
  };
  const closeModel = () => {
    setSwitchModel(false);
    setProductData(null);
  };
  return switchModel ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <ProductModel product={product} onClose={closeModel} />
    </div>
    
  ) : (
    <div
      className="flex flex-col shadow-lg h-auto w-80 bg-slate-800 p-5 text-gray-300 rounded-lg overflow-hidden"
      key={product.id}
    >
      <div className="flex max-h-72 flex-1">
        <ProductImage fill={true} image={product} />
      </div>

      <div className="flex justify-between font-bold my-3">
        <p className="w-auto truncate">{product.name}</p>
      </div>

      <div>
        <p className="text-md text-teal-300">{formatPrice(product.price)}</p>
        
       
       
      </div>
      
      <button
        className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center mt-4"
        onClick={() => handleModel(product.id)}
      >
        Add to cart
      </button>
    </div>
  );
};
