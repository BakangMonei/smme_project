// Done [Working Vety Well]
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase'; // Import your Firebase configuration
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function AdminFundingOpp() {
    // Initialize useNavigate for redirection
    const navigate = useNavigate();
    const [fundingOpps, setFundingOpps] = useState([]);
    const [newFundingOpp, setNewFundingOpp] = useState({
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

    const addFundingOppToFirestore = async () => {
        try {
            // Add the new funding opportunity to Firestore
            const fundsCollection = collection(firestore, 'funds');
            await addDoc(fundsCollection, newFundingOpp);

            // Update the state with the new funding opportunity data
            setFundingOpps([...fundingOpps, newFundingOpp]);

            // Clear the input fields
            setNewFundingOpp({
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
            // Redirect to the LoginPage
            navigate('/AdminDashboard'); // Replace '/LoginPage' with the actual path to your LoginPage component
        } catch (error) {
            console.error('Error adding funding opportunity: ', error);
            alert('Error adding funding opportunity. Please try again.');
        }
    };
    return (
        <div className="bg-white w-96 h-auto p-4 rounded-lg shadow-md mx-auto">
            <div className="text-black text-4xl font-bold font-sans border-b-2 text-center">Add Funding Opportunity</div>

            <div className="flex flex-col mt-4">
                <label className="text-black font-mono text-xl">Name</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Name"
                    value={newFundingOpp.name}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, name: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Information</label>
                <textarea
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Information"
                    rows="3"
                    value={newFundingOpp.information}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, information: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Contacts</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Contacts"
                    value={newFundingOpp.contacts}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, contacts: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Website</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Website"
                    value={newFundingOpp.website}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, website: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Photo</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Photo URL"
                    value={newFundingOpp.photo}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, photo: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Country</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Country"
                    value={newFundingOpp.country}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, country: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Min Amount</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Min Amount"
                    value={newFundingOpp.minAmount}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, minAmount: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Max Amount</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Max Amount"
                    value={newFundingOpp.maxAmount}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, maxAmount: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Eligible Sectors</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Eligible Sectors"
                    value={newFundingOpp.eligibleSectors}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, eligibleSectors: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono ">Apply Here</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Apply Here URL"
                    value={newFundingOpp.applyHere}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, applyHere: e.target.value })}
                />
            </div>
            {/* Add more input fields for funding opportunity data */}

            <div className="mt-6 flex justify-center">
                <button className="bg-blue-500 rounded-xl border border-cyan-400  w-1/4 py-2 text-white font-bold" onClick={addFundingOppToFirestore}>
                    ADD
                </button>
            </div>
        </div>
    );
}

export default AdminFundingOpp;
