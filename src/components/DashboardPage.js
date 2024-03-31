import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/add-user');
  };

  return (
    <div>
      <nav className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div>
            <button onClick={handleAddUser} className="mr-4 text-lg">Add User</button>
            <Link to="/add-order" className="mr-4 text-lg">Add Order</Link>
            <Link to="/view-order" className="text-lg">View Order</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-8">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <form>
          <div className="mb-4">
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="Phone Number" />
          </div>
          <div className="mb-4">
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="password" placeholder="Password" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;