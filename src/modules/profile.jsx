import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchWishlist = () => {
      const wishlistData = localStorage.getItem("wishlist");
      if (wishlistData) {
        const parsedWishlist = JSON.parse(wishlistData);
        setWishlistItems(parsedWishlist.slice(0, 3)); // Get the top 3 items
      }
    };

    const fetchRecentOrders = () => {
      const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
      const recentOrders = orderHistory.slice(0, 3); // Get the last 3 orders
      setRecentOrders(recentOrders);
    };

    fetchWishlist();
    fetchRecentOrders();
  }, []);

  if (isLoading) {
    return <div className="m-auto flex justify-center align-middle">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container mx-auto px-4 py-8 font-medium">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src={user.picture} width={200} alt={user.name} />
          </div>
          <div className="col-span-2">
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Top 3 Wishlist Items</h3>
              {wishlistItems.length === 0 ? (
                <p>No items in the wishlist</p>
              ) : (
                <ul className="list-disc pl-4">
                  {wishlistItems.map((item) => (
                    <li key={item.productId} className="flex items-center mb-2">
                      <img src={`https://e-commerce-web-lake.vercel.app/images/${item.image}`} alt="" width={200} className="mr-2" />
                      <span>{item.productName}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
              {recentOrders.length === 0 ? (
                <p>No recent orders</p>
              ) : (
                <ul className="list-disc pl-4">
                  {recentOrders.map((order) => (
                    <li key={order.orderId}>
                      {order.items.map((item) => (
                        <span key={item.productId}>{item.productName}, </span>
                      ))}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
