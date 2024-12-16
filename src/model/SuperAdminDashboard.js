import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChalkboardTeacher,
  FaHandshake,
  FaMoneyBillWave,
  FaRobot,
} from "react-icons/fa";
import {
  AiFillBank,
  AiFillMessage,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import {BsFillPersonPlusFill} from "react-icons/bs"
import { BiPhoneCall, BiLogoZoom } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings, FiUsers } from "react-icons/fi";
import { GrResources } from "react-icons/gr";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(true);
  const [userData, setUserData] = useState(null);

  // Fetch user data from Firestore
  const getUserData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const adminRef = doc(db, "s_admin", user.uid);
        const adminSnapshot = await getDoc(adminRef);

        if (adminSnapshot.exists()) {
          const { firstname, lastname } = adminSnapshot.data();
          setUserData({ firstname, lastname });
        } else {
          toast.warn("Admin data not found.");
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
          <img
            src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-lg font-semibold">
            {userData
              ? `${userData.firstname} ${userData.lastname}`
              : "Mr. Bakang Monei Motshegwe"}
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
        <h1 className="text-3xl font-bold text-center mb-6">
          Super Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Cards */}
          <Link to="/AdminProfile">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <FaHome size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">My Profile</h3>
              <p className="text-sm text-gray-600">
                This is the Super Admin Profile
              </p>
            </div>
          </Link>

          <Link to="/AdminAddIndividual">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <BsFillPersonPlusFill
                size={40}
                className="mx-auto text-blue-600 mb-4"
              />
              <h3 className="text-lg font-semibold">Add Users</h3>
              <p className="text-sm text-gray-600">
                Click to add new individual or company
              </p>
            </div>
          </Link>

          <Link to="/AdminFundingOpp">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <AiFillBank size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">Funding Opportunities</h3>
              <p className="text-sm text-gray-600">
                Click to add new funding opportunities
              </p>
            </div>
          </Link>

          <Link to="/AdminMentorMatch">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <FaChalkboardTeacher
                size={40}
                className="mx-auto text-blue-600 mb-4"
              />
              <h3 className="text-lg font-semibold">Add Mentor</h3>
              <p className="text-sm text-gray-600">Click to add new mentor</p>
            </div>
          </Link>

          <Link to="/AdminNetwork">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <FaHandshake size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">Networking Collabs</h3>
              <p className="text-sm text-gray-600">
                Click to add new networking opportunities
              </p>
            </div>
          </Link>

          <Link to="/AdminUserResources">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <GrResources size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">Useful Resources</h3>
              <p className="text-sm text-gray-600">
                Click to add new resources
              </p>
            </div>
          </Link>

          <Link to="/AdminVirtualIncubators">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <BiLogoZoom size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">Create Incubators</h3>
              <p className="text-sm text-gray-600">
                Click to add new incubator
              </p>
            </div>
          </Link>

          <Link to="/UserDashboard">
            <div className="bg-white shadow-md border-2 border-blue-600 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <AiOutlineUser size={40} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">Log As User</h3>
              <p className="text-sm text-gray-600">Experience user view</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
