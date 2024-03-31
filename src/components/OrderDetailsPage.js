import React, { useState, useEffect } from 'react';

const OrderDetailsPage = ({ token }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/get-order', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Order Details</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id} className="mb-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold">User ID:</span> {order.userId}
              </div>
              <div>
                <span className="font-bold">Subtotal:</span> {order.subTotal}
              </div>
              <div>
                <span className="font-bold">Phone Number:</span> {order.phoneNumber}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsPage;