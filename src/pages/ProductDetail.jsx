import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { product_id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const variant = [
    ["variant 1"]
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fastapi-1-k5961008.deta.app/product-details/${product_id}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data.');
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [product_id]);

  // Add a condition to handle the null case before accessing the length property
  if (data === null) {
    return <p>Loading...</p>;
  }

  // Rest of the code
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.length === 0 && !isLoading && !error && <p>No matching products found.</p>}
      {data.length > 0 && (
        <div className="container mx-10">
          {data.map(item => (
            <div key={item[0]} className="grid grid-cols-3 gap-12">
              <div className="col-span-1">
                <img
                  src={`https://e-commerce-web-lake.vercel.app/images/${item[4]}`}
                  className="w-full object-contain"
                  alt="Product"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <div className="font-medium text-4xl">{item[1]}</div>
                <span>Terjual <span className="text-slate-500">40+</span></span>
                <span className="text-black font-semibold text-3xl mt-3">
                  Rp{item[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>
                <div className="mt-10 text-lg">
                  <p><b>Pilih Variant: </b><span className="text-slate-600 font-medium">{variant[0]}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
