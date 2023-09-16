// Done [Working Vety Well]
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { firestore } from '../firebase'; // Import your Firebase configuration

const AdminNetwork = () => {
    // Initialize useNavigate for redirection
    const navigate = useNavigate();
    const [newNetwork, setNewNetwork] = useState({
        imageURL: '',
        companyName: '',
        founder: '',
        sector: '',
        phoneNumber: '',
        email: '',
        location: '',
        website: '',
        category: '', // This should be set based on the selected category
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewNetwork((prevNetwork) => ({
            ...prevNetwork,
            [name]: value,
        }));
    };

    const handleAddNetwork = async () => {
        try {
            // Add the new network to Firestore
            const networksCollection = collection(firestore, 'networking_collab');
            await addDoc(networksCollection, newNetwork);

            // Clear the form
            setNewNetwork({
                imageURL: '',
                companyName: '',
                founder: '',
                sector: '',
                phoneNumber: '',
                email: '',
                location: '',
                website: '',
                category: '',
            });

            // Display a success message or navigate to the network list
            alert('Network added successfully!');
            navigate('/AdminDashboard');
        } catch (error) {
            console.error('Error adding network: ', error);
            alert('Error adding network. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Network</h1>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="mb-4">
                    <label className="block mb-2">Image URL:</label>
                    <input
                        type="text"
                        name="imageURL"
                        value={newNetwork.imageURL}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Company Name:</label>
                    <input
                        type="text"
                        name="companyName"
                        value={newNetwork.companyName}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Founder:</label>
                    <input
                        type="text"
                        name="founder"
                        value={newNetwork.founder}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Sector:</label>
                    <input
                        type="text"
                        name="sector"
                        value={newNetwork.sector}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={newNetwork.phoneNumber}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={newNetwork.email}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={newNetwork.location}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Website:</label>
                    <input
                        type="text"
                        name="website"
                        value={newNetwork.website}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Category:</label>
                    <select
                        name="category"
                        value={newNetwork.category}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    >
                        <option value="">Select Category</option>
                        <option value="Technology And Software Development">Technology And Software Development</option>
                        <option value="Digital Marketing And E-Commerce">Digital Marketing And E-Commerce</option>
                        <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
                        <option value="Finance and Investment">Finance and Investment</option>
                        <option value="Healthcare and Wellness">Healthcare and Wellness</option>
                        <option value="Manufacturing and Product Development">Manufacturing and Product Development</option>
                        <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                        <option value="Creative and Media">Creative and Media</option>
                        <option value="Retail and Merchandising">Retail and Merchandising</option>
                        <option value="Education and Training">Education and Training</option>
                        <option value="Environmental Sustainability">Environmental Sustainability</option>
                        <option value="Legal and Compliance">Legal and Compliance</option>
                        <option value="Non-profit and Social Enterprises">Non-profit and Social Enterprises</option>
                        <option value="Real Estate and Property Management">Real Estate and Property Management</option>
                        <option value="Farming and Agricultural Practices">Farming and Agricultural Practices</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleAddNetwork}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        Add Network
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminNetwork;
