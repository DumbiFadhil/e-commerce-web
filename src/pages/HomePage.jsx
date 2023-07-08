import React, { useState, useEffect } from 'react';
import { ProductCarousel } from '../components/Carousel';

export const HomePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fastapi-1-k5961008.deta.app/new-arrival');
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
  }, []);
    

  return (
    <main className='mb-auto'>
      <ProductCarousel />
      <div className="flex flex-col items-center justify-between p-5 font-medium">
        <h1 className="text-3xl mt-20 mb-8 font-semibold text-black sm:text-xl md:text-3xl">
          New Arrivals
        </h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && data.length === 0 && <p>No products available in the inventory.</p>}
        {data && data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(item => (
              <div className="flex flex-col" key={item[0]}>
                <div className="bg-white shadow-md rounded-lg p-4">
                  <img src={`https://e-commerce-web-lake.vercel.app/images/${item[4]}`} className="w-full h-48 object-cover" alt="Product" />
                  <div className="mt-4">
                    <h5 className="text-xl font-semibold flex justify-center">{item[1]}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isLoading && !error && !data && <p>No products available.</p>}
        <div className='mt-12 mb-3 font-semibold text-2xl'>
          <a href="/product" className="relative">
            <span className="custom-underline">View More</span>
            <span className="underline-hover"></span>
          </a>
        </div>
      </div>
    </main>
  );
};
