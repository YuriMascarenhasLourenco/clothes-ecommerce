'use client';
import { useEffect, useState } from "react";
import { productType } from "@/types/productType";
import { ProductList } from "./components/productList";
export default function Home() {
  const [data, setData] = useState<productType[]>([]); // Estado para armazenar os produtos

  const fetchProducts = async () => {
    try {
      const timestamp = new Date().getTime(); // Você pode usar esse timestamp para evitar cache em URL se quiser
      const res = await fetch("https://ecommerce-cart-0v1d.onrender.com/product", {
        cache: "no-store",
      });
      const json = await res.json();
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
