import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import test from '../images/test_img.jpg';

const SplashScreen = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading process for 4 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
            navigate('/LoginPage'); // Navigate to LoginPage.js
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {isLoading ? (
                // Loading spinner while waiting
                <div className="animate-spin text-4xl mb-4">Loading...</div>
            ) : (
                // Replace this with your own image
                <img
                    src={logo}
                    alt="Splash Image"
                    className="w-64 h-64 animate-fade-in"
                />
            )}
        </div>
    );
};

export default SplashScreen;