import React, { useState } from 'react';

const UserDashboard = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (boxIndex) => {
        setSelectedBox(boxIndex);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-100 p-4">
                <ul>
                    <li className="mb-2 mt-8">
                        <a href="#" className="block text-purple-600 hover:text-purple-800 font-semibold">
                            Company Profile
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block text-purple-600 hover:text-purple-800 font-semibold">
                            About Companies
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block text-purple-600 hover:text-purple-800 font-semibold">
                            Other Companies
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block text-purple-600 hover:text-purple-800 font-semibold">
                            Create Opportunities
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block text-purple-600 hover:text-purple-800 font-semibold">
                            Message Box
                        </a>
                    </li>
                </ul>
                <div className="mt-auto">
                    <a href="#" className="block text-purple-600 hover:text-purple-800 font-semibold">
                        Contact Us
                    </a>
                </div>
            </div>


            {/* Main Content */}
            <div className="w-3/4 p-8 border-l">
                <h1 className="text-2xl font-bold mb-4">My Dashboard</h1>
                <div className="grid grid-cols-2 gap-4">
                    {Array.from({ length: 6 }, (_, index) => (
                        <div
                            key={index}
                            onClick={() => handleBoxClick(index)}
                            className={`bg-white p-4 border border-gray-300 rounded-lg ${selectedBox === index ? 'bg-purple-900' : ''
                                } cursor-pointer transition duration-300`}
                        >
                            <h1 className={`text-xl font-semibold ${selectedBox === index ? 'text-white' : 'text-gray-700'}`}>
                                {index === 0 && 'Resources'}
                                {index === 1 && 'Mentor Match'}
                                {index === 2 && 'Networking and Collab'}
                                {index === 3 && 'Funding Opportunities'}
                                {index === 4 && 'Virtual Incubators'}
                                {index === 5 && 'View Our Posts'}
                            </h1>
                            <p className={`text-sm mt-2 ${selectedBox === index ? 'text-gray-300' : 'text-gray-500'}`}>
                                {index === 0 && 'Repository of resources such as videos'}
                                {index === 1 && 'Where mentors are searched for'}
                                {index === 2 && 'Where other companies connect'}
                                {index === 3 && 'Section about financing'}
                                {index === 4 && 'Where companies join meetings or seminars'}
                                {index === 5 && 'See analytics of our posts'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
