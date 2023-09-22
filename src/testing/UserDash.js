import React from 'react';
import { Link } from 'react-router-dom'; // You may need to adjust this for your routing setup
import { FaUser, FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import your preferred icons
import { BiNews } from 'react-icons/bi'; // Import more icons as needed
import { IoMdNotifications } from 'react-icons/io';

const UserDash = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <nav className="w-56 bg-white shadow-md">
                <div className="p-4 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">User Dashboard</h2>
                    <p className="text-gray-600">Welcome, John Doe!</p>
                </div>
                <ul className="space-y-2 mt-6">
                    {/* Home */}
                    <li className="hover:bg-blue-100">
                        <Link to="/">
                            <span className="text-gray-600">
                                <FaHome className="inline-block mr-2" />
                                Home
                            </span>
                        </Link>
                    </li>

                    {/* Profile */}
                    <li className="hover:bg-blue-100">
                        <Link to="/profile">
                            <span className="text-gray-600">
                                <FaUser className="inline-block mr-2" />
                                Profile
                            </span>
                        </Link>
                    </li>

                    {/* Notifications */}
                    <li className="hover:bg-blue-100">
                        <Link to="/notifications">
                            <span className="text-gray-600">
                                <IoMdNotifications className="inline-block mr-2" />
                                Notifications
                            </span>
                        </Link>
                    </li>

                    {/* News */}
                    <li className="hover:bg-blue-100">
                        <Link to="/news">
                            <span className="text-gray-600">
                                <BiNews className="inline-block mr-2" />
                                News
                            </span>
                        </Link>
                    </li>

                    {/* Settings */}
                    <li className="hover:bg-blue-100">
                        <Link to="/settings">
                            <span className="text-gray-600">
                                <FaCog className="inline-block mr-2" />
                                Settings
                            </span>
                        </Link>
                    </li>

                    {/* Logout */}
                    <li className="hover:bg-blue-100">
                        <Link to="/logout">
                            <span className="text-gray-600">
                                <FaSignOutAlt className="inline-block mr-2" />
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Content */}
            <main className="flex-1 p-4 overflow-y-auto">
                <h1 className="text-2xl font-semibold text-gray-800">Dashboard Content</h1>

                {/* Responsive grid for clickable boxes */}
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {/* Box 1 */}
                    <Link to="/box1">
                        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                            <h2 className="text-lg font-semibold text-gray-800">Box 1</h2>
                            <p className="text-gray-600">Click to view Box 1 content</p>
                        </div>
                    </Link>

                    {/* Box 2 */}
                    <Link to="/box2">
                        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                            <h2 className="text-lg font-semibold text-gray-800">Box 2</h2>
                            <p className="text-gray-600">Click to view Box 2 content</p>
                        </div>
                    </Link>

                    {/* Box 3 */}
                    <Link to="/box3">
                        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                            <h2 className="text-lg font-semibold text-gray-800">Box 3</h2>
                            <p className="text-gray-600">Click to view Box 3 content</p>
                        </div>
                    </Link>

                    {/* Box 4 */}
                    <Link to="/box4">
                        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                            <h2 className="text-lg font-semibold text-gray-800">Box 4</h2>
                            <p className="text-gray-600">Click to view Box 4 content</p>
                        </div>
                    </Link>

                    {/* Box 5 */}
                    <Link to="/box5">
                        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg cursor-pointer">
                            <h2 className="text-lg font-semibold text-gray-800">Box 5</h2>
                            <p className="text-gray-600">Click to view Box 5 content</p>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default UserDash;
