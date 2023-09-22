import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Import your Firebase configuration

const Card = ({ network, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedNetwork, setUpdatedNetwork] = useState({ ...network });

    const handleUpdate = () => {
        onUpdate(updatedNetwork);
        setIsEditing(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
                {network.imageURL && (
                    <img
                        src={network.imageURL}
                        alt="Network Image"                        className="w-10 h-10 rounded-full mr-2"
                    />
                )}
                <h2 className="text-lg font-semibold">{network.companyName}</h2>
            </div>
            <p>Founder: {isEditing ? (
                <input
                    type="text"
                    value={updatedNetwork.founder}
                    onChange={(e) => setUpdatedNetwork({ ...updatedNetwork, founder: e.target.value })}
                />
            ) : (
                network.founder
            )}</p>
            {/* Add similar sections for other network properties */}
            <div className="mt-2">
                {isEditing ? (
                    <button
                        onClick={handleUpdate}
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md ml-2"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 hover.bg-blue-600 text-white px-2 py-1 rounded-md ml-2"
                    >
                        Edit
                    </button>
                )}
                <button
                    onClick={() => onDelete(network.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md ml-2"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

const AdminViewNetwork = () => {
    const [networks, setNetworks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const networkCollection = collection(firestore, 'networking_collab');
                const networkSnapshot = await getDocs(networkCollection);
                const networkData = networkSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setNetworks(networkData);
            } catch (error) {
                console.error('Error fetching networks: ', error);
            }
        };

        fetchData();
    }, []);

    const handleUpdate = async (updatedNetwork) => {
        try {
            const networkDocRef = doc(firestore, 'networking_collab', updatedNetwork.id);
            await updateDoc(networkDocRef, updatedNetwork);
            setNetworks((prevNetworks) =>
                prevNetworks.map((network) => (network.id === updatedNetwork.id ? updatedNetwork : network))
            );
        } catch (error) {
            console.error('Error updating network: ', error);
            alert('Error updating network. Please try again.');
        }
    };

    const handleDelete = async (networkId) => {
        try {
            const networkDocRef = doc(firestore, 'networking_collab', networkId);
            await deleteDoc(networkDocRef);
            setNetworks((prevNetworks) => prevNetworks.filter((network) => network.id !== networkId));
        } catch (error) {
            console.error('Error deleting network: ', error);
            alert('Error deleting network. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">View Networks</h1>
            <div className="bg-white rounded-lg shadow-md p-4">
                {networks.length === 0 ? (
                    <p>No networks found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {networks.map((network) => (
                            <Card
                                key={network.id}
                                network={network}
                                onDelete={handleDelete}
                                onUpdate={handleUpdate}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminViewNetwork;
