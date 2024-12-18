import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaHandshake,
  FaMoneyBillWave,
  FaUserCircle,
} from "react-icons/fa";
import { AiOutlineUser, AiOutlineLogout, AiFillMessage } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings, FiUsers } from "react-icons/fi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { BiLogoZoom } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../database/firebase";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(true);
  const [userData, setUserData] = useState(null);

  // Fetch user data from Firestore
  const getUserData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          const { firstName, lastName } = userSnapshot.data();
          setUserData({ firstName, lastName });
          console.log(setUserData);
        } else {
          toast.warn("User Data not found.");
        }
      }
    } catch (error) {
      toast.error("Error fetching user data.");
      console.error(error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setAuthenticated(false);
      toast.success("Logged out successfully!");
      navigate("/LoginPage");
    } catch (error) {
      toast.error("Error logging out.");
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <ToastContainer />
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-600 text-white p-6">
        <div className="flex items-center mb-6">
          <FaUserCircle className="h-10 w-10 mr-2" />
          <span className="text-lg font-semibold">
            {userData ? `${userData.firstName} ${userData.lastName}` : "User"}
          </span>
        </div>
        <hr className="border-gray-300 mb-6" />
        <ul>
          <Link to="/Chat">
            <li className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg">
              <FaRobot className="mr-2" />
              SwiftIQ AI
            </li>
          </Link>
          <Link to="#">
            <li className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg">
              <AiOutlineUser className="mr-2" />
              My Profile
            </li>
          </Link>
          <Link to="#">
            <li className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg">
              <AiFillMessage className="mr-2" />
              Inbox
            </li>
          </Link>
          <Link to="#">
            <li className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg">
              <BiPhoneCall className="mr-2" />
              Calls
            </li>
          </Link>
          <Link to="#">
            <li className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg">
              <IoIosNotificationsOutline className="mr-2" />
              Notifications
            </li>
          </Link>
          <Link to="/Settings">
            <li className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg">
              <FiSettings className="mr-2" />
              Settings
            </li>
          </Link>
          <li
            className="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg cursor-pointer"
            onClick={handleLogout}
          >
            <AiOutlineLogout className="mr-2" />
            Logout
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-4/5 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">User Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Content Cards */}
          <Link to="/AdminVirtualIncubators">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <BiLogoZoom size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">Create Incubators</h3>
              <p className="text-sm text-gray-600">
                Click to add new incubator
              </p>
            </div>
          </Link>

          <Link to="/UserResources">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <GrResources size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">View Resources</h3>
              <p className="text-sm text-gray-600">Click to view resources</p>
            </div>
          </Link>

          <Link to="/NetworkingCollaboration">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <FaHandshake size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">Networks & Collabs</h3>
              <p className="text-sm text-gray-600">
                Click to explore collaborations
              </p>
            </div>
          </Link>

          <Link to="/MentorMatch">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <PiChalkboardTeacher
                size={40}
                className="mx-auto text-blue-600 mb-4"
              />
              <h3 className="text-lg font-semibold">Mentor Match</h3>
              <p className="text-sm text-gray-600">
                Find mentors to interact with
              </p>
            </div>
          </Link>

          <Link to="/AdminViewFundingOpportunity">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <FaMoneyBillWave
                size={40}
                className="mx-auto text-blue-600 mb-4"
              />
              <h3 className="text-lg font-semibold">Funding Opportunities</h3>
              <p className="text-sm text-gray-600">Learn about funding</p>
            </div>
          </Link>

          <Link to="/AdminViewUsers">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <FiUsers size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">View Users</h3>
              <p className="text-sm text-gray-600">Manage user profiles</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
