import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${children[0]}`);
  };

  return (
    <button
      onClick={handleClick}
      key={children[0]}
      className="border"
    >
      <div className="flex flex-col" key={children[0]}>
        <div className="shadow-lg rounded-lg p-4">
          <img
            src={`https://e-commerce-web-lake.vercel.app/images/${children[4]}`}
            className="w-full h-48 object-cover"
            alt="Product"
          />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">{children[1]}</h5>
            <p className="text-gray-600">
              Price: Rp{children[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
            <span className="text-gray-600">{children[3]} in stock</span>
          </div>
        </div>
      </div>
    </button>
  );
};
