import React, { useState } from "react";
import { auth, firestore } from "../../database/firebase"; // Import Firebase Auth and Firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import {
  User,
  Mail,
  Lock,
  MapPin,
  Phone,
  List,
  Loader2,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage = () => {
  const businessTypes = ["Retail", "Service", "Technology", "Food", "Other"];
  const businessSectors = [
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Other",
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !companyType ||
      !location ||
      !phoneNumber ||
      !category
    ) {
      toast.error("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    try {
      const emailExistsQuery = query(
        collection(firestore, "users"),
        where("email", "==", email)
      );
      const emailExistsSnapshot = await getDocs(emailExistsQuery);

      if (!emailExistsSnapshot.empty) {
        toast.error("Email already exists.");
        setLoading(false);
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

      const userData = {
        firstName,
        lastName,
        email,
        companyType,
        location,
        phoneNumber,
        category,
        createdAt: new Date(),
      };

      await addDoc(collection(firestore, "users"), userData);

      toast.success("Registration successful!");
      navigate("/login");
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
          <User className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Business Owner Registration
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Create your account to access business tools.
        </p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <User className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <User className="absolute right-3 top-3 text-gray-400" />
          </div>
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
          <div className="relative">
            <select
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Company Type</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <List className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <MapPin className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Phone className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              {businessSectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
            <List className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Register"
            )}
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/LoginPage")}
              className="text-blue-500 hover:text-blue-700 flex items-center justify-center mt-4"
            >
              Already have an account? Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
