import React, { useState } from 'react';
import { auth, firestore } from '../firebase'; // Import Firebase Auth and Firestore
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export const RegisterPage = () => {
    const businessTypes = ['Retail', 'Service', 'Technology', 'Food', 'Other'];
    const businessSectors = ['Finance', 'Healthcare', 'Education', 'Manufacturing', 'Other'];

    // State for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [category, setCategory] = useState('');

    // State for validation and registration success
    const [validationError, setValidationError] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    // Initialize useNavigate for redirection
    const navigate = useNavigate();

    // Function to handle user registration
    const handleRegister = async () => {
        // Check if any required field is empty
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
            // Validation error: Some fields are empty
            setValidationError(true);
            setRegistrationSuccess(false);
        } else {
            // Clear validation error if it was previously set
            setValidationError(false);

            // Check if the email is unique
            const emailExistsQuery = query(collection(firestore, 'users'), where('email', '==', email));
            const emailExistsSnapshot = await getDocs(emailExistsQuery);

            if (!emailExistsSnapshot.empty) {
                // Email already exists in the database
                setValidationError(true);
                setRegistrationSuccess(false);
                return;
            }

            try {
                // Create a new user with email and password
                await createUserWithEmailAndPassword(auth, email, password);

                // Create an object with the user's data (excluding password)
                const userData = {
                    firstName,
                    lastName,
                    email,
                    companyType,
                    location,
                    phoneNumber,
                    category,
                };

                // Add the user's data to Firestore
                const docRef = await addDoc(collection(firestore, 'users'), userData);

                if (docRef) {
                    // Registration and Firestore data addition successful
                    setRegistrationSuccess(true);

                    // Redirect to the LoginPage
                    navigate('/'); // Replace '/LoginPage' with the actual path to your LoginPage component
                } else {
                    console.error('Error adding user data to Firestore.');
                    setRegistrationSuccess(false);
                }
            } catch (error) {
                console.error('Error registering user:', error);
                setRegistrationSuccess(false);
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4">Business Owner Registration</h1>

                {/* Display validation error message */}
                {validationError && (
                    <p className="text-red-500 mb-2">Please fill out all required fields.</p>
                )}

                {/* Display registration success message */}
                {registrationSuccess && (
                    <p className="text-green-500 mb-2">Registered Successfully!</p>
                )}

                {/* Registration Form */}
                <div className="grid gap-4 mb-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Company Type */}
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

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Category */}
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

                {/* Register Button */}
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    onClick={handleRegister}
                >
                    Register
                </button>

                {/* Already have an account? Login link */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Already have an account? <a href="/" className="text-blue-500  font-bold">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
