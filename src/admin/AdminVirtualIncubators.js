// Done [Working Very Well]
import React, { useState } from 'react';
function AdminVirtualIncubators() {
    // Assuming VirtualIncubators.js is imported or included where necessary
    // You can initialize it with some example data for testing
    const initialIncubators = [
        { id: 1, description: 'Virtual Incubator 1', location: 'Location 1', website: 'https://example.com/incubator1' },
        { id: 2, description: 'Virtual Incubator 2', location: 'Location 2', website: 'https://example.com/incubator2' },
    ];

    const [virtualIncubators, setVirtualIncubators] = useState(initialIncubators);
    const [newIncubator, setNewIncubator] = useState({
        description: '',
        location: '',
        website: '',
    });

    const addIncubator = () => {
        const updatedIncubators = [...virtualIncubators, { ...newIncubator }];
        setVirtualIncubators(updatedIncubators);
        setNewIncubator({
            description: '',
            location: '',
            website: '',
        });
    };

    // Define functions for updating, deleting, and viewing incubators as needed

    return (
        <div className="mt-20 bg-white w-96 h-screen p-4 rounded-lg shadow-md mx-auto">
            <div className="text-black text-4xl text-center font-sans font-bold border-b-2">Manage Virtual Incubators</div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Description</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Description"
                    value={newIncubator.description}
                    onChange={(e) => setNewIncubator({ ...newIncubator, description: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Location</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Location"
                    value={newIncubator.location}
                    onChange={(e) => setNewIncubator({ ...newIncubator, location: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Website</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Website URL"
                    value={newIncubator.website}
                    onChange={(e) => setNewIncubator({ ...newIncubator, website: e.target.value })}
                />
            </div>
            <div className="mt-6 flex justify-center">
                <button className="border-purple-950 rounded-2xl border bg-blue-500  w-1/4 py-2" onClick={addIncubator}>
                    ADD
                </button>

                {/* Add more buttons for update, delete, and view functionalities */}
            </div>
        </div>
    );
}

export default AdminVirtualIncubators;
