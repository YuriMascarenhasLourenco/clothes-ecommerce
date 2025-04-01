import { productType } from "@/types/productType";
import { ProductList } from "./components/productList";

export default async function Home() {
  const timestamp= new Date().getTime();
  const res = await fetch("http://localhost:5050/product",{
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <div className="w-screen h-screen  mx-auto pt-8 xl:px-0 ">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-6">
      
     
          {data.map((product: productType) => (
          <ProductList key={product.id} product={product}></ProductList>
          ))}
        
     
      </div>
    </div>
  );
}
