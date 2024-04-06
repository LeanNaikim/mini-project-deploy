"use client"
import CardProduct from "@/components/card/CardProduct";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://store.istad.co/api/products/";

export default function Page() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data.results));
	}, []);
console.log(products)
	return (
		<>
      <main>
        {/* <h1 className="w-screen text-center uppercase tracking-widest font-bold text-2xl">products</h1>
        <div className="h-screen mt-6 container mx-autp grid grid-cols-4 grid-flow-row gap-4">
          {products.map((product: any, index) => (
            <CardProduct
              onClick={() => router.push(`/${product.id}`)}
              key={index}
              title={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div> */}
        {/* <div className="mt-6 mx-auto max-w-screen-lg lg:px-4 xl:px-8">
          <div className="flex flex-col gap-4">
            {products.map((product: any, index) => (
              <CardProduct
                onClick={() => router.push(`/${product.id}`)}
                key={index}
                title={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div> */}
        {/* <div className="mt-6 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product: any, index) => (
              <CardProduct
                onClick={() => router.push(`/${product.id}`)}
                key={index}
                title={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div> */}

        <div className="mt-6 mx-auto max-w-screen-xl lg:px-4 xl:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product: any, index) => (
              <div key={index} className="">
                <CardProduct
                  onClick={() => router.push(`/${product.id}`)}
                  title={product.name}
                  image={product.image}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>


      </main>
    </>
	);
}
