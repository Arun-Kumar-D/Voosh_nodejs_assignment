import React, { useState } from 'react';

const SignupPage = ({ setToken }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, phoneNumber, password })
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      const { token } = data;

      setToken(token);

      window.location.href = '/';
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h2 className="max-w-sm mx-auto mt-10">Signup Page</h2>
      <input className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <input className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;