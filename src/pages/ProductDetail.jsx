import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

const variant = [
  "variant 1",
  "variant 2",
  "variant 3",
  "variant 4",
  "variant 5"
];

export const ProductDetail = () => {
  const { product_id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCounter] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(variant[0]);
  const { isAuthenticated } = useAuth0();
  const [wishlistItems, setWishlistItems] = useState([]);

  console.log(isAuthenticated);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fastapi-1-k5961008.deta.app/product-details/${product_id}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setError('Error fetching data.');
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [product_id]);

  const copyURL = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      console.log("URL copied to clipboard:", url);
      toast.success("URL has been copied to the clipboard", {
        position: "bottom-right",
        autoClose: 1500
      });
    } catch (error) {
      console.error("Failed to copy URL to clipboard:", error);
      toast.error("Failed to copy URL to clipboard", {
        position: "bottom-right",
        autoClose: 1500
      });
    }
  };

  const addToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to cart", {
        position: "bottom-right",
        autoClose: 1500
      });
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemToAdd = {
      productId: product_id,
      variant: selectedVariant,
      quantity: count,
      productName: data[0][1],
      price: data[0][2],
      image: data[0][4]
    };

    const updatedCart = [...existingCart, itemToAdd];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Item added to cart", {
      position: "bottom-right",
      autoClose: 1500
    });
  };

  useEffect(() => {
    const fetchWishlist = () => {
      const wishlistData = localStorage.getItem("wishlist");
      if (wishlistData) {
        const parsedWishlist = JSON.parse(wishlistData);
        setWishlistItems(parsedWishlist);
      }
    };

    fetchWishlist();
  }, []);

  const addToWishlist = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to the wishlist", {
        position: "bottom-right",
        autoClose: 1500
      });
      return;
    }

    const isProductInWishlist = wishlistItems.some(item => item.productId === product_id);

    if (isProductInWishlist) {
      toast.info("Product is already in the wishlist", {
        position: "bottom-right",
        autoClose: 1500
      });
    } else {
      const newItem = {
        productId: product_id,
        productName: data[0][1],
        image: data[0][4]
      };
      const updatedWishlist = [...wishlistItems, newItem];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlistItems(updatedWishlist);
      toast.success("Product added to wishlist", {
        position: "bottom-right",
        autoClose: 1500
      });
    }
  };

  if (data === null) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }

  return (
    <>
      {isLoading && <p className="flex justify-center items-center">Loading...</p>}
      {error && <p className="flex justify-center align-middle">Error: {error}</p>}
      {data.length === 0 && !isLoading && !error && <p className="flex justify-center align-middle">No matching products found.</p>}
      {data.length > 0 && (
        <div className="container">
          {data.map(item => (
            <div key={item[0]} className="grid grid-cols-7 gap-12 w-full">
              {/* product image */}
              <div className="col-span-2 ml-5">
                <img
                  src={`https://e-commerce-web-lake.vercel.app/images/${item[4]}`}
                  className="w-full object-contain"
                  alt="Product"
                />
              </div>
              {/* product detail */}
              <div className="flex flex-col col-span-3">
                <div className="font-medium text-4xl">{item[1]}</div>
                <span>Terjual <span className="text-slate-500">40+</span></span>
                <span className="text-black font-semibold text-3xl mt-2">
                  Rp{item[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>
                <span className="text-gray-500 font-medium">
                  <strike>Rp{item[2] > 1000000 ? (item[2] + 1990000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : (item[2] + 199000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</strike>
                </span>
                <div className="mt-8 text-lg">
                  <p>
                    <b>Choose Variant:</b>
                    <select
                      value={selectedVariant}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="text-slate-600 font-medium ml-2 accent-amber-300"
                    >
                      {variant.map((variantOption, index) => (
                        <option key={index} value={variantOption}>{variantOption}</option>
                      ))}
                    </select>
                  </p>
                </div>
                <div className="mt-5 font-bold">Product Detail:</div>
                <span className="mt-1">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur odit eum necessitatibus repudiandae voluptate, modi harum explicabo? Aspernatur assumenda praesentium eveniet eum iure perspiciatis magni repudiandae cupiditate et totam.</p>
                </span>
                <span className="mt-8">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur odit eum necessitatibus repudiandae voluptate, modi harum explicabo? Aspernatur assumenda praesentium eveniet eum iure perspiciatis magni repudiandae cupiditate et totam.</p>
                </span>
                <span className="mt-8">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur odit eum necessitatibus repudiandae voluptate, modi harumexplicabo? Aspernatur assumenda praesentium eveniet eum iure perspiciatis magni repudiandae cupiditate et totam.</p>
                </span>
              </div>
              {/* product checkout */}
              <div className="flex flex-col col-span-2 mr-3">
                <div className="border shadow-lg p-3 rounded-2xl">
                  <div className="font-bold mb-3">Purchase Detail</div>
                  <span className="text-slate-600 font-medium">{selectedVariant}</span>
                  <div className="flex items-center mt-5 mb-1">
                    <div className="w-36 flex rounded-md border-black border">
                      <button
                        onClick={() => setCounter(count > 1 ? count - 1 : 1)}
                        className="w-1/3 h-full flex items-center justify-center border-r border-black hover:rounded-l-md hover:bg-gray-300"
                      >
                        <span className="text-lg font-bold">-</span>
                      </button>
                      <span className="w-2/3 flex items-center justify-center">
                        <input
                          type="number"
                          min="0"
                          max={item[3]}
                          value={count}
                          onChange={(e) => setCounter(parseInt(e.target.value))}
                          onBlur={(e) => {
                            const inputValue = parseInt(e.target.value);
                            if (isNaN(inputValue) || inputValue < 1 || inputValue > item[3]) {
                              setCounter(1);
                            }
                          }}
                          className="w-20 pl-8 custom-number-input"
                        />
                      </span>
                      <button
                        onClick={() => setCounter(count < item[3] ? count + 1 : item[3])}
                        className="w-1/3 h-full flex items-center justify-center border-l border-black hover:rounded-r-md hover:bg-gray-300"
                      >
                        <span className="text-lg font-bold">+</span>
                      </button>
                    </div>
                    <span className="ml-3">Available Stock: <span className="font-bold">{item[3]}</span></span>
                  </div>
                  <span className="text-gray-600 text-sm">Max. Purchase {item[3]} pcs</span>
                  <div className="text-gray-500 font-medium mt-3 flex justify-end"><strike>Rp{item[2] > 1000000 ? ((item[2] + 1990000) * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : ((item[2] + 199000) * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</strike></div>
                  <div className="flex text-lg justify-between">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold">Rp{(item[2] * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                  </div>
                  <div className="flex flex-col mt-5 mx-auto">
                    <button
                      onClick={addToCart}
                      className="rounded-lg h-10 bg-amber-500 text-white font-bold hover:bg-amber-600"
                    >
                      + Cart
                    </button>
                  </div>
                  <div className="grid grid-cols-2 mt-3 justify-center divide-x-2 divide-gray-400 font-medium text-gray-700">
                    <button onClick={addToWishlist}>Wishlist</button>
                    <button onClick={copyURL}>Share</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ToastContainer />
        </div>
      )}
    </>
  );
};
