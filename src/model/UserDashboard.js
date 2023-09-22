import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // If you're using React Router
import { FaHome } from 'react-icons/fa'; // You can choose any icon you prefer
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiFillBank } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { LiaBookSolid } from 'react-icons/lia';
import { BiLogoZoom } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { AiOutlineUser, AiFillMessage } from 'react-icons/ai';
import { GrResources } from 'react-icons/gr';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import { auth } from '../firebase'; // Import auth from Firebase
import { useEffect } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firestore functions


const UserDashboard = () => {


    // Function to handle user logout
    const handleLogout = async () => {
        try {
            await auth.signOut(); // Sign the user out using Firebase auth
            setAuthenticated(false); // Set authenticated state to false
            navigate('/LoginPage'); // Redirect to LoginPage using the navigate function
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(true);
    const [userData, setUserData] = useState(null);

    // Function to fetch user data from Firestore
    const getUserData = async () => {
        try {
            const user = auth.currentUser;
            console.log('Current User:', user); // Log the current user
            if (user) {
                const db = getFirestore();
                const adminRef = doc(db, 'admin', user.uid);

                console.log('Admin Document Reference:', adminRef); // Log the document reference

                const adminSnapshot = await getDoc(adminRef);

                console.log('Admin Snapshot:', adminSnapshot); // Log the document snapshot

                if (adminSnapshot.exists()) {
                    const adminData = adminSnapshot.data();
                    console.log('Admin Data:', adminData); // Log the admin data

                    // Assuming 'firstname' and 'lastname' exist in the admin document
                    const { firstname, lastname } = adminData;

                    // Set the user data in state
                    setUserData({ firstname, lastname });
                } else {
                    console.log('Admin document does not exist for the user.');
                }
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };





    useEffect(() => {
        getUserData();
    }, []);
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 text-white p-10">
                <div className="flex items-center mb-4">
                    <img
                        src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    {userData ? (
                        <span>{userData.firstname} {userData.lastname}</span>
                    ) : (
                        <span>Judge Tech</span>
                    )}
                </div>

                <hr className="my-4 border-t border-gray-600" />
                <ul>
                    {/* Sidebar options */}
                    <Link to="/Chat"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <FaRobot className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            SwiftIQ AI
                        </li>
                    </Link>
                    <Link to="#"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <AiOutlineUser className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            My Profile
                        </li>
                    </Link>
                    <Link to="#"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <AiFillMessage className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            Inbox
                        </li>
                    </Link>
                    <Link to="#"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <BiPhoneCall className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            Calls
                        </li>
                    </Link>
                    <Link to="#"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <IoIosNotificationsOutline className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            Notifications
                        </li>
                    </Link>
                    <Link to="/Settings"> {/* Replace "to" with your actual route if using React Router */}
                        <li className="flex items-center my-2">
                            <FiSettings className="h-5 w-5 mr-2" /> {/* Adjust the icon size and styles as needed */}
                            Settings
                        </li>
                    </Link>
                    <li className="flex items-center my-2 cursor-pointer" onClick={handleLogout}>
                        <AiOutlineLogout className="h-5 w-5 mr-2" />
                        Logout
                    </li>

                    {/* Add more sidebar options similarly */}

                </ul>
            </div>
            {/* Content */}
            <div className="w-4/5 p-4">
                <h1 className="text-4xl font-bold text-center pb-4">User Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* Content boxes */}
                    

                    

                    

                    <Link to="/AdminVirtualIncubators">
                        <div className="bg-white p-4 shadow-md w-48 h-48 border-2 border-blue-500 rounded-2xl text-center">
                            <div className="flex justify-center items-center mt-8 font-bold">
                                <BiLogoZoom size={32} />
                                <p className="ml-2 font-bold">Create Incubators</p>
                            </div>
                            <p className="mt-2 text-sm font-semibold">Click to add New Incubator</p>
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

export default UserDashboard;
