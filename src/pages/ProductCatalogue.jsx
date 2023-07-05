import React, { useState, useEffect } from 'react';
import { SearchQuery } from '../components/SearchQuery';
import { ProductCard } from '../components/ProductCard';

export const ProductCatalogue = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/product-data')
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

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Adjust the debounce delay as per your requirements (e.g., 500ms)

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const filteredData = data ? data.filter(item => item[1].toLowerCase().includes(debouncedQuery.toLowerCase())) : [];

  const handleChange = (e) => {
    setQuery(e.target.value);
  };


  return (
    <main className="mb-auto">
      <div className="flex flex-col items-center justify-between p-5 font-medium">
        <SearchQuery query={query} handleChange={handleChange} /> {/* Use the Header component */}
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {filteredData.length === 0 && <p>No matching products found.</p>}
        {filteredData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredData.map(item => (
              <ProductCard>{item}</ProductCard>
            ))}
          </div>
        )}
        {!isLoading && !error && filteredData.length === 0 && <p>No products available.</p>}
      </div>
    </main>
  );
};

export default ProductCatalogue;