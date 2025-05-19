'use client';
import { useEffect, useState } from "react";
import { productType } from "@/types/productType";
import { ProductList } from "./components/productList";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <span className="text-xl font-bold">loading...</span>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState<productType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://ecommerce-cart-0v1d.onrender.com/product", {
        cache: "no-store",
      });
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loading />;

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