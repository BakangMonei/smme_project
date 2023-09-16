import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { FaHome } from 'react-icons/fa'; // You can choose any icon you prefer
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiFillBank } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { LiaBookSolid } from 'react-icons/lia';
import { BiLogoZoom } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { GrResources } from 'react-icons/gr';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';

const AdminDashboard = () => {
    return (
        <div className="flex h-auto bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 text-white p-10">
                <div className="flex items-center mb-4">
                    <img
                    src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <span>Bakang Monei Motshegwe</span>
                </div>
                <hr className="my-4 border-t border-gray-600" />
                <ul>
                    {/* Sidebar options */}
                    <Link to="/Settings"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <FiSettings className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            Settings
                        </li>
                    </Link>
                    <Link to="/LoginPage"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <AiOutlineLogout className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            Logout
                        </li>
                    </Link>
                    <Link to="/Chat"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <AiOutlineLogout className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            My Bot
                        </li>
                    </Link>
                    {/* Add more sidebar options similarly */}
                    
                </ul>
            </div>
            {/* Content */}
            <div className="w-4/5 p-4">
                <h1 className="text-4xl font-bold text-center pb-4">Admin Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* Content boxes */}
                    <Link to="/AdminProfile">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <FaHome size={32} />
                                <p className="ml-2 font-bold">My Profile</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">This is the Administrator Profile</p>
                        </div>
                    </Link>

                    <Link to="/AdminAddIndividual">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <BsFillPersonPlusFill size={32} /> 
                                <p className="ml-2 font-bold">Add Users</p> 
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to add New Individual or Company</p>
                        </div>
                    </Link>
                  
                    <Link to="/AdminFundingOpp">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <AiFillBank size={32} />
                                <p className="ml-2 font-bold">Add Funding Opportunities</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to add New Funding Opportunities</p>
                        </div>
                    </Link>

                    <Link to="/AdminMentorMatch">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <FaChalkboardTeacher size={32} />
                                <p className="ml-2 font-bold">Add Mentor</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to add New Mentor</p>
                        </div>
                    </Link>

                    <Link to="/AdminNetwork">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <FaNetworkWired size={32} />
                                <p className="ml-2 font-bold">Add Networking Collabs</p> 
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to add New Networking Opportunities</p>
                        </div>
                    </Link>

                    <Link to="/AdminUserResources">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <LiaBookSolid size={32} />
                                <p className="ml-2 font-bold">Add Useful Resources</p> 
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to add New Resources</p>
                        </div>
                    </Link>

                    <Link to="/AdminVirtualIncubators">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <BiLogoZoom size={32} />
                                <p className="ml-2 font-bold">Create Incubators</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to add New Incubator</p>
                        </div>
                    </Link>

                    <Link to="/UserDashboard">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <AiOutlineUser size={32} /> 
                                <p className="ml-2 font-bold">Log As User</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to experience user view</p>
                        </div>
                    </Link>

                    <Link to="/UserResources">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <GrResources size={32} />
                                <p className="ml-2 font-bold">View Resources</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to View Resources</p>
                        </div>
                    </Link>
                    <Link to="/NetworkingCollaboration">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <GrResources size={32} />
                                <p className="ml-2 font-bold">View Networks & Collabs</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to View Networks & Collabs</p>
                        </div>
                    </Link>
                    <Link to="/MentorMatch">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <PiChalkboardTeacher size={32} />
                                <p className="ml-2 font-bold">View Mentors</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to View Mentors and interact</p>
                        </div>
                    </Link>
                    <Link to="/AdminViewFundingOpportunity">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <FaMoneyBillWave size={32} />
                                <p className="ml-2 font-bold">View Funding Opportunities</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to learn more about funding Opportunities and more...</p>
                        </div>
                    </Link>
                    <Link to="/VirtualIncubators">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <FaHandshake size={32} />
                                <p className="ml-2 font-bold">Join Incubators</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to join on-going Incubators</p>
                        </div>
                    </Link>

                    <Link to="/AdminViewAdmins">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <MdOutlineAdminPanelSettings size={32} />
                                <p className="ml-2 font-bold">View Other Admins</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to view other administrators</p>
                        </div>
                    </Link>

                    <Link to="/AdminViewUsers">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <FiUsers size={32} />
                                <p className="ml-2 font-bold">View All Users</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to view users</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
