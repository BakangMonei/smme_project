// Done [Working Vety Well]
import React, { useState } from 'react';
const AdminUpdateUser = ({ user, onUpdate, onClose }) => {
    const [updatedUser, setUpdatedUser] = useState({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        phoneNumber: user.phoneNumber,
        companyType: user.companyType,
        category: user.category,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Call the onUpdate function passed as a prop to update the user
        onUpdate(updatedUser);
        onClose(); // Close the modal
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-50">
            <div className="bg-white w-96 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
                <div className="mb-4">
                    <label className="block mb-2">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={updatedUser.firstName}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={updatedUser.lastName}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={updatedUser.location}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={updatedUser.phoneNumber}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Company Type:</label>
                    <input
                        type="text"
                        name="companyType"
                        value={updatedUser.companyType}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={updatedUser.category}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminUpdateUser;
