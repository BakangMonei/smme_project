import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import 'firebase/auth'; // Import Firebase Authentication
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
require('firebase/auth')

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const userSnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
      const adminSnapshot = await getDocs(query(collection(db, 'admin'), where('email', '==', email)));
      const s_adminSnapshot = await getDocs(query(collection(db, 's_admin'), where('email', '==', email)));

      if (userSnapshot.size > 0) {
        // User exists in the 'user' collection
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/UserDashboard');
      } else if (adminSnapshot.size > 0) {
        // User exists in the 'admin' collection
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/AdminDashboard');
      } 
      else if (s_adminSnapshot.size > 0) {
        // User exists in the 's_admin' collection
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/SuperAdminDashboard');
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError(error.message);
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account? <a href="/RegisterPage" className="text-blue-500 font-bold">Register</a>
          </p>
          <p className="text-sm">
            <a href="/ForgotPassword" className="text-blue-500 font-bold">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
