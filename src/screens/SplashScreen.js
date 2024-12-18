import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../logo.svg";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the login page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/LoginPage"); // Navigate to LoginPage.js
    }, 3000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5 }}
          className="text-center text-white"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold">Welcome to Business Connect</h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="h-1 bg-white mt-4 rounded"
          ></motion.div>
          <p className="mt-4 text-lg">Empowering businesses with technology.</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
