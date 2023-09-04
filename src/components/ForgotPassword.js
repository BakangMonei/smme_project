import React, { useState } from 'react';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleSend = () => {
        if (email.trim() === '') {
            setValidationError(true);
            setEmailSent(false);
        } else {
            setValidationError(false);
            setEmailSent(true);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
                {validationError && (
                    <p className="text-red-500 mb-2">Email is required.</p>
                )}
                {emailSent && (
                    <p className="text-green-500 mb-2">Check your email for password reset instructions.</p>
                )}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder='Email Here'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    />
                </div>
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    onClick={handleSend}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;
