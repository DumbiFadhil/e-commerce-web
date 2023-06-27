import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const FilteredCatalogue = () => {
  const { product_category } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/filtered-data/${product_category}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Error fetching data.');
        setIsLoading(false);
      });
  }, [product_category]);

  return (
    <main className="mb-auto h-screen">
      <div className="flex flex-col items-center justify-between p-5 font-medium">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && data.length === 0 && <p>No products available in the inventory.</p>}
        {data && data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map(item => (
              <div className="flex flex-col" key={item[0]}>
                <div className="bg-white shadow-md rounded-lg p-4">
                  <img src={`http://localhost:8000/static/images/${item[5]}`} className="w-full h-48 object-cover" alt="Product" />
                  <div className="mt-4">
                    <h5 className="text-xl font-semibold">{item[1]}</h5>
                    <p className="text-gray-600">Price: Rp.{item[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    <span className="text-gray-600">{item[4]} in stock</span>
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
}

export default FilteredCatalogue;
