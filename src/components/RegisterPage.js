import React, { useState } from 'react';

export const RegisterPage = () => {
    const businessTypes = ['Retail', 'Service', 'Technology', 'Food', 'Other'];
    const businessSectors = ['Finance', 'Healthcare', 'Education', 'Manufacturing', 'Other'];

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [category, setCategory] = useState('');
    const [validationError, setValidationError] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegister = () => {
        if (
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            companyType.trim() === '' ||
            location.trim() === '' ||
            phoneNumber.trim() === '' ||
            category.trim() === ''
        ) {
            setValidationError(true);
            setRegistrationSuccess(false);
        } else {
            setValidationError(false);
            setRegistrationSuccess(true);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4">Business Owner Registration</h1>
                {validationError && (
                    <p className="text-red-500 mb-2">Please fill out all required fields.</p>
                )}
                {registrationSuccess && (
                    <p className="text-green-500 mb-2">Registered Successfully!</p>
                )}
                <div className="grid gap-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Company Type</label>
                        <select
                            value={companyType}
                            onChange={(e) => setCompanyType(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        >
                            <option value="">Select...</option>
                            {businessTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        >
                            <option value="">Select...</option>
                            {businessSectors.map(sector => (
                                <option key={sector} value={sector}>
                                    {sector}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    onClick={handleRegister}
                >
                    Register
                </button>
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Already have an account? <a href="#" className="text-blue-500">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
