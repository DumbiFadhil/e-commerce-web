import React from "react";

const OrderHistory = () => {
  const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

  const getRandomStatus = () => {
    const statuses = [
      { label: "Order is being processed", icon: "fa-clock" },
      { label: "Order is being packaged", icon: "fa-box" },
      { label: "Order is being delivered", icon: "fa-truck" },
      { label: "Order has been received", icon: "fa-check-circle" },
      { label: "Order has been canceled", icon: "fa-times-circle" }
    ];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      {orderHistory.length === 0 ? (
        <p className="text-gray-500">You have no order history.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Variants
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orderHistory.map((order, index) => {
                const status = getRandomStatus();

                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ul className="list-disc pl-8">
                        {order.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item.productName} - Qty: {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ul className="list-disc pl-8">
                        {order.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item.variant}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Rp{(order.total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="flex items-center">
                        <i className={`fas ${status.icon} ${status.label === "Order has been canceled" ? 'text-red-500' : 'text-green-500'} mr-2`} />
                        {status.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
