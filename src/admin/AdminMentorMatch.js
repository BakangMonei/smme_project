import React from 'react';

function AdminMentorMatch() {
    return (
        <div className="bg-white w-96 h-auto p-4 rounded-lg shadow-md mx-auto">
            <div className="text-black text-4xl font-bold font-inter">Add Mentor</div>
            
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
                <label className="text-black text-xs font-bold font-inter">PhoneNumber</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter PhoneNumber"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Facebook</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Facebook"
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
                <label className="text-black text-xs font-bold font-inter">LinkedIn</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter LinkedIn"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Description</label>
                <textarea
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Description"
                    rows="3"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xs font-bold font-inter">Expertise</label>
                <input
                    type="text"
                    className="bg-zinc-300 rounded-2xl border border-cyan-400 p-1"
                    placeholder="Enter Expertise"
                />
            </div>
            <div className="mt-6 flex justify-between">
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

export default AdminMentorMatch;
