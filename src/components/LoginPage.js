import React from 'react';


export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text" placeholder='Username'
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password" placeholder='Password'
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account? <a href="#" className="text-blue-500">Register</a>
          </p>
          <p className="text-sm">
            <a href="#" className="text-blue-500">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
