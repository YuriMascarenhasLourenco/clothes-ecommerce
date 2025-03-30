import { productType } from "@/types/productType";
import Image from "next/image";
import { ProductList } from "./components/productList";

export default async function Home() {
  const res = await fetch("http://localhost:5050/product");
  const data = await res.json();
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto pt-8 xl:px-0 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 xl:gap-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
     
          {data.map((product: productType) => (
          <ProductList key={product.id} product={product}></ProductList>
          ))}
        
      </div>
      </div>
    </div>
  );
}
