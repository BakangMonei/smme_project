import React, { useState } from 'react';

function AdminFundingOpp() {
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

    const addFundingOpp = () => {
        const updatedFundingOpps = [...fundingOpps, { ...newFundingOpp }];
        setFundingOpps(updatedFundingOpps);
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
    };

    return (
        <div className="bg-white w-96 h-auto p-4 rounded-lg shadow-md mx-auto">
            <div className="text-black text-4xl font-bold font-inter">Add Funding Opportunity</div>
            
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Name</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Name"
                    value={newFundingOpp.name}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, name: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Information</label>
                <textarea
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Information"
                    rows="3"
                    value={newFundingOpp.information}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, information: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Contacts</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Contacts"
                    value={newFundingOpp.contacts}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, contacts: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Website</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Website"
                    value={newFundingOpp.website}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, website: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Photo</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Photo URL"
                    value={newFundingOpp.photo}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, photo: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Country</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Country"
                    value={newFundingOpp.country}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, country: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Min Amount</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Min Amount"
                    value={newFundingOpp.minAmount}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, minAmount: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Max Amount</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Max Amount"
                    value={newFundingOpp.maxAmount}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, maxAmount: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Eligible Sectors</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Eligible Sectors"
                    value={newFundingOpp.eligibleSectors}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, eligibleSectors: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Apply Here</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Apply Here URL"
                    value={newFundingOpp.applyHere}
                    onChange={(e) => setNewFundingOpp({ ...newFundingOpp, applyHere: e.target.value })}
                />
            </div>

            {/* Add more input fields for other attributes */}
            <div className="mt-6 flex justify-between">
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2" onClick={addFundingOpp}>
                    ADD
                </button>
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2" onClick={addFundingOpp}>
                    UPDATE
                </button>
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2" onClick={addFundingOpp}>
                    DELETE
                </button>
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2" onClick={addFundingOpp}>
                    VIEW
                </button>
                {/* Add more buttons for update, delete, and view functionalities */}
            </div>

        </div>
    );
}

export default AdminFundingOpp;