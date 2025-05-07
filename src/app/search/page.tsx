'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/app/services/api";
import { productType } from "@/types/productType";
import { ProductList } from "@/app/components/productList";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("productId"); // Obtém o parâmetro de busca
    const [products, setProducts] = useState<productType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (query) {
                    const response = await api.get<productType>(`product/${query}`);
                    setProducts([response.data]);
                }
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        fetchProducts();
    }, [query]);

    return (
        <div className="flex flex-col items-center justify-center bg-slate-700 min-h-screen ">
            <h1 className="text-2xl font-bold mb-6">Search Results</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductList key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-gray-500">No products found.</p>
                )}
            </div>
        </div>
    );
}