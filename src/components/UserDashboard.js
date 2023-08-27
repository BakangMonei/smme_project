import React, { useState } from 'react';
import { FiHome, FiInfo, FiBriefcase, FiMessageCircle, FiMail, FiBell } from 'react-icons/fi';

const UserDashboard = () => {
    const [activeBox, setActiveBox] = useState(null);

    const boxes = [
        { title: 'Resources', explanation: 'Repository of resources such as vids' },
        { title: 'Mentor match', explanation: 'Where mentors are searched for' },
        { title: 'Networking and Collab', explanation: 'Where other companies see each other' },
        { title: 'Funding opportunities', explanation: 'Section about financing' },
        { title: 'Virtual incubators', explanation: 'Where companies join and view meetings or seminars' },
        { title: 'View our posts', explanation: 'Where we can see the analytics' },
    ];

    const handleBoxClick = (index) => {
        setActiveBox(index);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-100 p-6 border-r border-gray-300">
                <div className="space-y-4">
                    <SidebarItem icon={<FiHome />} title="Company Profile" />
                    <SidebarItem icon={<FiInfo />} title="About Companies" />
                    <SidebarItem icon={<FiBriefcase />} title="Other companies" />
                    <SidebarItem icon={<FiMessageCircle />} title="Create opportunities" />
                    <SidebarItem icon={<FiMail />} title="Message Box" />
                    <div className="mt-auto">
                        <SidebarItem icon={<FiBell />} title="Contact us" />
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-grow p-6">
                <h1 className="text-2xl font-semibold mb-4">My Dashboard</h1>
                <div className="grid grid-cols-2 gap-4">
                    {boxes.map((box, index) => (
                        <DashboardBox
                            key={index}
                            title={box.title}
                            explanation={box.explanation}
                            isActive={activeBox === index}
                            onClick={() => handleBoxClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, title }) => (
    <div className="flex items-center space-x-2 cursor-pointer text-purple-900">
        {icon}
        <span>{title}</span>
    </div>
);

const DashboardBox = ({ title, explanation, isActive, onClick }) => (
    <div
        className={`p-4 bg-white border-2 border-purple-900 rounded-lg ${isActive ? 'border-opacity-100' : 'border-opacity-30'
            } cursor-pointer`}
        onClick={onClick}
    >
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className={`text-sm ${isActive ? 'text-purple-900' : 'text-gray-500'}`}>{explanation}</p>
    </div>
);

export default UserDashboard;
