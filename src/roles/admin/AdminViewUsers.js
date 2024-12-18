// Done [Working Vety Well]
import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Import your firebase configuration
import AdminUpdateUser from './AdminUpdateUser'; // Import the AdminUpdateUser component

const AdminViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = collection(firestore, 'users');
            const usersSnapshot = await getDocs(usersCollection);
            const usersData = [];
            usersSnapshot.forEach((doc) => {
                usersData.push({ id: doc.id, ...doc.data() });
            });
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            const userRef = doc(firestore, 'users', userId);
            await deleteDoc(userRef);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user: ', error);
        }
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
    };

    const handleUpdateUser = async (updatedUser) => {
        try {
            const userRef = doc(firestore, 'users', updatedUser.id);
            await updateDoc(userRef, {
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                location: updatedUser.location,
                phoneNumber: updatedUser.phoneNumber,
                companyType: updatedUser.companyType,
                category: updatedUser.category,
            });

            // Update the users state to reflect the changes
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === updatedUser.id ? updatedUser : user
                )
            );

            setEditingUser(null); // Close the edit modal
        } catch (error) {
            console.error('Error updating user: ', error);
        }
    };

    const handleCloseEditModal = () => {
        setEditingUser(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-lg shadow-md p-4"
                    >
                        <h2 className="text-lg font-semibold mb-2">
                            {user.firstName} {user.lastName}
                        </h2>
                        <p>Email: {user.email}</p>
                        <p>Location: {user.location}</p>
                        <p>Phone Number: {user.phoneNumber}</p>
                        <p>Company Type: {user.companyType}</p>
                        <p>Category: {user.category}</p>
                        <div className="mt-4 space-x-2">
                            <button
                                onClick={() => handleDeleteUser(user.id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleEditUser(user)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {editingUser && (
                <AdminUpdateUser
                    user={editingUser}
                    onUpdate={handleUpdateUser}
                    onClose={handleCloseEditModal}
                />
            )}
        </div>
    );
};

export default AdminViewUsers;
