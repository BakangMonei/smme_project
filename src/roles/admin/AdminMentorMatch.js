// Done [Working Very Well]
import React from 'react';

function AdminMentorMatch() {
    return (
        <div className="bg-white w-96 h-screen p-4 rounded-lg shadow-md mx-auto">
            <div className="text-black text-4xl text-center font-bold font-sans border-b-2">Add Mentor</div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Name</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Name"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">ID</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter ID"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">PhoneNumber</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter PhoneNumber"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Facebook</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Facebook"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Email</label>
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Email"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">LinkedIn</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter LinkedIn"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Description</label>
                <textarea
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Description"
                    rows="3"
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Expertise</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Expertise"
                />
            </div>
            <div className="mt-6 flex justify-center">
                <button className="bg-blue-500 rounded-xl border border-cyan-400  w-1/4 py-2 text-white font-bold">
                    ADD
                </button>
            </div>
        </div>
    );
}

export default AdminMentorMatch;
