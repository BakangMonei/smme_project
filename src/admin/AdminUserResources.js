// Done [Working Very Well]
import React, { useState } from 'react';
function AdminUserResources() {
    // Assuming UserResources.js is imported or included where necessary
    // You can initialize it with some example data for testing
    const initialResources = [
        { id: 1, url: 'https://example.com/resource1', name: 'Resource 1', author: 'Author 1', about: 'About Resource 1', category: 'Category 1' },
        { id: 2, url: 'https://example.com/resource2', name: 'Resource 2', author: 'Author 2', about: 'About Resource 2', category: 'Category 2' },
    ];

    const [userResources, setUserResources] = useState(initialResources);
    const [newResource, setNewResource] = useState({
        id: '',
        url: '',
        name: '',
        author: '',
        about: '',
        category: '',
    });

    const addResource = () => {
        const updatedResources = [...userResources, { ...newResource }];
        setUserResources(updatedResources);
        setNewResource({
            id: '',
            url: '',
            name: '',
            author: '',
            about: '',
            category: '',
        });
    };

    // Define functions for updating, deleting, and viewing resources as needed

    return (
        <div className="bg-white w-96 h-screen p-4 rounded-lg shadow-md mx-auto">
            <div className="text-black text-4xl font-bold text-center font-sans border-b-2">Manage User Resources</div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Resource URL</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Resource URL"
                    value={newResource.url}
                    onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Resource Name</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Resource Name"
                    value={newResource.name}
                    onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
                />
            </div>
            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Resource ID</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Resource ID"
                    value={newResource.id}
                    onChange={(e) => setNewResource({ ...newResource, id: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Author</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Author"
                    value={newResource.author}
                    onChange={(e) => setNewResource({ ...newResource, author: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">About</label>
                <textarea
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter About"
                    rows="3"
                    value={newResource.about}
                    onChange={(e) => setNewResource({ ...newResource, about: e.target.value })}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label className="text-black text-xl font-mono">Category</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter Category"
                    value={newResource.category}
                    onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
                />
            </div>

            {/* Add more input fields for other resource attributes */}
            <div className="mt-6 flex justify-center">
                <button className="bg-blue-500 border-purple-950 rounded-2xl border w-1/4 py-2" onClick={addResource}>
                    ADD
                </button>

                {/* Add more buttons for update, delete, and view functionalities */}
            </div>
        </div>
    );
}

export default AdminUserResources;
