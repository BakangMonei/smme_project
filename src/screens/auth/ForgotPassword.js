import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../database/firebase";
import { Mail, ArrowLeftCircle, Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent! Check your email.");
      navigate("/LoginPage");
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
          <Mail className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Password
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Enter your email address below to receive a password reset link.
        </p>
        <form onSubmit={handleSend} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Mail className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Send Reset Link"
            )}
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/LoginPage")}
              className="text-blue-500 hover:text-blue-700 flex items-center justify-center mt-4"
            >
              <ArrowLeftCircle className="h-5 w-5 mr-1" />
              Back to Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;