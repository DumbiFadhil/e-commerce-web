import React, { useEffect, useState } from "react";

export const Wishlist = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fastapi-1-k5961008.deta.app/product-data');
        const fetchedData = await response.json();
        const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

        const filteredData = fetchedData.filter(item => {
          return wishlistItems.some(wishlistItem => wishlistItem.productId === item[0].toString());
        });

        setData(filteredData);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data.');
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = data.filter(item => item[0] !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setData(updatedWishlist);
  };

  return (
    <div className="flex justify-center flex-col">
      {isLoading && <div className="w-full flex justify-center"><p>Loading...</p></div>}
      {error && <div className="w-full flex justify-center"><p>Error: {error}</p></div>}
      <div className="w-3/4 justify-center m-auto mt-5 border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {data.length === 0 && <div className="w-full flex justify-center"><p>No products in the wishlist.</p></div>}
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map(item => (
              <tr key={item[0]}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-16">
                      <img className="h-16 w-16 rounded" src={`https://e-commerce-web-lake.vercel.app/images/${item[4]}`} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item[1]}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end">
                    <button
                      className="px-3 py-1 bg-red-500 text-white font-semibold rounded-md"
                      onClick={() => removeFromWishlist(item[0])}
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
