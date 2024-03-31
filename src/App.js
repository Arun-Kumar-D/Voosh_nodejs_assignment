import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AddUserPage from './components/AddUserPage';
import OrderDetailsPage from './components/OrderDetailsPage';
import DashboardPage from './components/DashboardPage';
import AddOrder from './components/AddOrder';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-blue-500 text-white py-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Order Management System</h1>
          </div>
        </header>
        <main className="container mx-auto flex-grow py-8">
          <Routes>
            <Route path="/" element={<LoginPage setToken={setToken} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/add-user" element={<AddUserPage />} />
            <Route path="/order-details" element={<OrderDetailsPage token={token} />} />
            <Route path='/dashboard' element={<DashboardPage/>} />
            <Route path='/add-order' element={<AddOrder/>} />
            <Route path='/view-order' element={<OrderDetailsPage/>} />

          </Routes>
        </main>
        <footer className="bg-blue-500 text-white py-4 mt-auto">
          <div className="container mx-auto">
            <p className="text-center">&copy; 2024 Order Management System</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;