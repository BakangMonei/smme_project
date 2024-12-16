// src/components/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Mail, Lock, ArrowRightCircle, Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Check for the user in different collections
      const userSnapshot = await getDocs(
        query(collection(db, "users"), where("email", "==", email))
      );
      const adminSnapshot = await getDocs(
        query(collection(db, "admin"), where("email", "==", email))
      );
      const sAdminSnapshot = await getDocs(
        query(collection(db, "s_admin"), where("email", "==", email))
      );

      // Sign in the user if they exist in one of the collections
      await signInWithEmailAndPassword(auth, email, password);

      if (userSnapshot.size > 0) {
        toast.success("Welcome User");
        navigate('/UserDashboard');
      } else if (adminSnapshot.size > 0) {
        toast.success("Welcome, Admin!");
        navigate('/AdminDashboard');
      } else if (sAdminSnapshot.size > 0) {
        toast.success("Welcome, Super Admin!");
        navigate('/SuperAdminDashboard');
      } else {
        toast.error(
          "Invalid email or password. Please check your credentials."
        );
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <Lock className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Login
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Sign in to your account to continue.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Mail className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Lock className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <span className="flex items-center">
                Login <ArrowRightCircle className="ml-2 h-5 w-5" />
              </span>
            )}
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/ForgotPassword")}
              className="text-blue-500 hover:text-blue-700 mt-4"
            >
              Forgot Password?
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/RegisterPage")}
              className="text-blue-500 hover:text-blue-700 mt-4"
            >
              Don’t have an account? Register
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
