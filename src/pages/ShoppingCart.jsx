import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify"

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  const removeFromCart = (productId, variant) => {
    const updatedCartItems = cartItems.filter(
      item => item.productId !== productId || item.variant !== variant
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += calculateSubtotal(item.price, item.quantity);
    });
    return total;
  };

  const handleCheckout = () => {
    // Save cart items to order history
    const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
    const newOrder = {
      items: cartItems,
      total: calculateTotal()
    };
    orderHistory.push(newOrder);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

    // Clear cart
    localStorage.removeItem("cart");
    setCartItems([]);

    // Display toast message
    toast.info("Your order is being processed. Thank you!", {
      position: "bottom-right",
      autoClose: 3000
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Variant
                </th>
                <th className="px-3 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Subtotal
                </th>
                <th className="px-6 py-3 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <React.Fragment key={`${item.productId}-${item.variant}`}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16">
                          <img
                            src={`https://e-commerce-web-lake.vercel.app/images/${item.image}`}
                            alt={item.productName}
                            className="h-16 w-16 rounded-md object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-lg font-medium text-gray-900">
                            {item.productName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.variant}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-center">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Rp{formatPrice(item.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Rp{formatPrice(calculateSubtotal(item.price, item.quantity))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-red-500 hover:text-red-700 font-medium"
                        onClick={() => removeFromCart(item.productId, item.variant)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  {index < cartItems.length - 1 && (
                    <tr>
                      <td colSpan="6" className="border-t border-gray-300"></td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="mt-8 flex justify-end">
            <p className="text-lg font-medium">
              Total: Rp{formatPrice(calculateTotal())}
            </p>
            <button
              className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
