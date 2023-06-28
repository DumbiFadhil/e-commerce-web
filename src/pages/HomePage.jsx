import React, { useState, useEffect } from 'react';
import { ProductCarousel } from '../components/Carousel';

export const HomePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/new-arrival')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Error fetching data.');
        console.log(error)
        setIsLoading(false);
      });
  }, []);

  return (
    <main className='mb-auto'>
      <ProductCarousel />
      <div className="flex flex-col items-center justify-between p-5 font-medium">
        <h1 className="text-3xl font-semibold text-black sm:text-xl md:text-3xl">
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
                  <img src={`http://localhost:8000/static/images/${item[5]}`} className="w-full h-48 object-cover" alt="Product" />
                  <div className="mt-4">
                    <h5 className="text-xl font-semibold flex justify-center">{item[1]}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isLoading && !error && !data && <p>No products available.</p>}
      </div>
    </main>
  );
};
