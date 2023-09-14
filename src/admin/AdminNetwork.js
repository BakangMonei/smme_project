import React from 'react';

function AdminNetwork() {
    return (
        <div className="bg-white w-96 h-auto p-4 rounded-lg shadow-md mx-auto">
            <div className="text-black text-4xl text-center font-bold font-inter">New Network</div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Name</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Name"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">ID</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter ID"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Website</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Website"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Location</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Location"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Email</label>
                <input
                    type="email"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Email"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Sector</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Sector"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Founder</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Founder"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Phone Number</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Phone Number"
                />
            </div>
            <div className="flex mt-6">
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2">
                    ADD
                </button>
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2">
                    UPDATE
                </button>
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2">
                    DELETE
                </button>
                <button className="bg-white rounded-2xl border border-cyan-400 w-1/4 py-2">
                    View
                </button>
            </div>
        </div>
    );
}

export default AdminNetwork;
