'use client';
import { useEffect, useState } from "react";
import { productType } from "@/types/productType";
import { ProductList } from "./components/productList";
import { api } from "./services/api";
export default function Home() {
  const [data, setData] = useState<productType[]>([]); // Estado para armazenar os produtos

  const fetchProducts = async () => {
    try {
      const timestamp = new Date().getTime(); // Você pode usar esse timestamp para evitar cache em URL se quiser
   const res = await api.get<productType[]>(`/product`);
   console.log(res.data);
      const json = res.data;
      setData(json); // Atualiza o estado com os dados
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    
    <div className="w-screen h-screen mx-auto pt-8 xl:px-0">
      <div className="grid grid-cols-1 p-12 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product: productType) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
