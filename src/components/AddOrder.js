import React, { useState } from 'react';

const AddOrder = ({ token }) => {
  const [subTotal, setSubTotal] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddOrder = async () => {
    try {
      await fetch('/add-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId: 'user_id_here', subTotal, phoneNumber })
      });
      console.log('Order added successfully');
    } catch (error) {
      console.error('Failed to add order', error);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <input className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="number" placeholder="Subtotal" value={subTotal} onChange={(e) => setSubTotal(e.target.value)} />
      <input className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleAddOrder}>Add Order</button>
    </div>
  );
};

export default AddOrder;
