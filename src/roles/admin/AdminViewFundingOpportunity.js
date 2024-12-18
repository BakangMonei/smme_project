// Done [Working Vety Well]
import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

function AdminViewFundingOpportunity() {
    const [fundingOpps, setFundingOpps] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingFundingOpp, setEditingFundingOpp] = useState({
        id: '',
        name: '',
        information: '',
        contacts: '',
        website: '',
        photo: '',
        country: '',
        minAmount: '',
        maxAmount: '',
        eligibleSectors: '',
        applyHere: '',
    });

    const fetchData = async () => {
        try {
            const fundingOppsCollection = collection(firestore, 'funds');
            const querySnapshot = await getDocs(fundingOppsCollection);
            const oppsData = [];
            querySnapshot.forEach((doc) => {
                oppsData.push({ id: doc.id, ...doc.data() });
            });
            setFundingOpps(oppsData);
        } catch (error) {
            console.error('Error fetching funding opportunities: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const fundingOppDoc = doc(firestore, 'funds', id);
            await deleteDoc(fundingOppDoc);
            fetchData();
        } catch (error) {
            console.error('Error deleting funding opportunity: ', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const fundingOppDoc = doc(firestore, 'funds', editingFundingOpp.id);
            await updateDoc(fundingOppDoc, {
                name: editingFundingOpp.name,
                information: editingFundingOpp.information,
                contacts: editingFundingOpp.contacts,
                website: editingFundingOpp.website,
                photo: editingFundingOpp.photo,
                country: editingFundingOpp.country,
                minAmount: editingFundingOpp.minAmount,
                maxAmount: editingFundingOpp.maxAmount,
                eligibleSectors: editingFundingOpp.eligibleSectors,
                applyHere: editingFundingOpp.applyHere,
            });
            fetchData();
            setIsEditing(false);
            setEditingFundingOpp({
                id: '',
                name: '',
                information: '',
                contacts: '',
                website: '',
                photo: '',
                country: '',
                minAmount: '',
                maxAmount: '',
                eligibleSectors: '',
                applyHere: '',
            });
        } catch (error) {
            console.error('Error updating funding opportunity: ', error);
        }
    };

    const handleEdit = (opp) => {
        setIsEditing(true);
        setEditingFundingOpp(opp);
    };

    return (

        <div>
            <h1 className="h-screen text-4xl text-center font-bold mb-4">Funding Opportunities</h1>
            <div className=" grid grid-cols-3 bg-white p-4 rounded-lg shadow-md mx-auto">
                {fundingOpps.map((fundingOpp) => (
                    <div key={fundingOpp.id} className="flex flex-auto mx-2 mb-4 p-4 border border-blue-500 rounded-lg">
                        {isEditing && editingFundingOpp.id === fundingOpp.id ? (
                            <div>
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Name"
                                    value={editingFundingOpp.name}
                                    onChange={(e) => setEditingFundingOpp({ ...editingFundingOpp, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Information"
                                    value={editingFundingOpp.information}
                                    onChange={(e) =>
                                        setEditingFundingOpp({ ...editingFundingOpp, information: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Contacts"
                                    value={editingFundingOpp.contacts}
                                    onChange={(e) => setEditingFundingOpp({ ...editingFundingOpp, contacts: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Website"
                                    value={editingFundingOpp.website}
                                    onChange={(e) => setEditingFundingOpp({ ...editingFundingOpp, website: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Photo"
                                    value={editingFundingOpp.photo}
                                    onChange={(e) => setEditingFundingOpp({ ...editingFundingOpp, photo: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Country"
                                    value={editingFundingOpp.country}
                                    onChange={(e) => setEditingFundingOpp({ ...editingFundingOpp, country: e.target.value })}
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Min Amount"
                                    value={editingFundingOpp.minAmount}
                                    onChange={(e) =>
                                        setEditingFundingOpp({ ...editingFundingOpp, minAmount: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Max Amount"
                                    value={editingFundingOpp.maxAmount}
                                    onChange={(e) =>
                                        setEditingFundingOpp({ ...editingFundingOpp, maxAmount: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Eligible Sectors"
                                    value={editingFundingOpp.eligibleSectors}
                                    onChange={(e) =>
                                        setEditingFundingOpp({ ...editingFundingOpp, eligibleSectors: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    className="w-full mb-2 p-1 border border-gray-300 rounded-md"
                                    placeholder="Apply Here"
                                    value={editingFundingOpp.applyHere}
                                    onChange={(e) =>
                                        setEditingFundingOpp({ ...editingFundingOpp, applyHere: e.target.value })
                                    }
                                />
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-xl font-semibold">{fundingOpp.name}</h2>
                                <img src={fundingOpp.photo} alt="Funding Opportunity" className="w-20 h-20 object-cover border border-blue-500 rounded-full mb-4" />
                                <p>{fundingOpp.information}</p>
                                <p>{fundingOpp.contacts}</p>
                                <p>{fundingOpp.website}</p>
                                <p>{fundingOpp.country}</p>
                                <p>{fundingOpp.minAmount}</p>
                                <p>{fundingOpp.maxAmount}</p>
                                <p>{fundingOpp.eligibleSectors}</p>
                                <p>{fundingOpp.applyHere}</p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                                    onClick={() => handleEdit(fundingOpp)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                                    onClick={() => handleDelete(fundingOpp.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminViewFundingOpportunity;
