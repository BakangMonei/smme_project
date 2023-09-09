import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {
    FiHome,
    FiInfo,
    FiBriefcase,
    FiMessageCircle,
    FiMail,
    FiBell,
    FiChevronDown,
    FiSettings,
    FiLogOut,
} from 'react-icons/fi';

const UserDashboard = () => {
    const [activeBox, setActiveBox] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '123-456-7890',
    };

    const boxes = [
        {
            title: 'Resources',
            explanation:
                'A centralized repository of educational materials, articles, videos and guides for startups',
        },
        {
            title: 'Mentor match',
            explanation:
                'Mentorship programs that connect experienced entrepreneurs with startups seeking guidance',
        },
        {
            title: 'Networking and Collaboration',
            explanation: 'Finding potential partners, collaborators, and team members',
        },
        {
            title: 'Funding opportunities',
            explanation: 'Information about grants, funding rounds, and investor contacts',
        },
        {
            title: 'Virtual incubators',
            explanation: 'A virtual space where startups can access co-working, workshops, and events',
        },
        {
            title: 'View our posts',
            explanation: 'See analytics of our posts',
        },
    ];

    const handleBoxClick = (index) => {
        setActiveBox(index);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-100 p-6 border-r border-gray-300">

                <div className="space-y-4 mt-10">
                    <SidebarItem icon={<FiHome />} title="Company Profile" />
                    <SidebarItem icon={<FiInfo />} title="About Company" />
                    <SidebarItem icon={<FiBriefcase />} title="Other companies" />
                    <SidebarItem icon={<FiMessageCircle />} title="Create opportunities" />
                    <SidebarItem icon={<FiMail />} title="Message Box" />
                    <SidebarItem icon={<FiBell />} title="Contact Us" />
                    <div className="mt-auto">
                        <div className="relative">
                            <div
                                onClick={toggleDropdown}
                                className="flex items-center space-x-2 cursor-pointer text-purple-900" >
                                <FiChevronDown />
                                {dropdownOpen && (
                                    <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md p-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                            <div>
                                                <p className="font-semibold">{user.name}</p>
                                                <p className="text-gray-500 text-sm">{user.email}</p>
                                                <p className="text-gray-500 text-sm">{user.phoneNumber}</p>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-center space-x-2 cursor-pointer">
                                                <FiLogOut />
                                                <span>Sign Out</span>
                                            </div>
                                            <div className="flex items-center space-x-2 cursor-pointer">
                                                <FiSettings />
                                                <span>Settings</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
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