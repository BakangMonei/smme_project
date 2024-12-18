import LoginPage from "./screens/auth/LoginPage";
import UserDashboard from "./model/UserDashboard";
import RegisterPage from "./screens/auth/RegisterPage"; // Import RegisterPage component
import ForgotPassword from "./screens/auth/ForgotPassword"; // Import ForgotPassword component
import UserResources from "./roles/user/UserResources";
import NetworkingCollaboration from "./roles/user/NetworkingCollaboration";
import MentorMatch from "./roles/user/MentorMatch";
import FundingOpportunity from "./roles/user/FundingOpportunity";
import AdminDashboard from "./model/AdminDashboard";
import VirtualIncubators from "./roles/user/VirtualIncubators";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the necessary components
import AdminAddIndividual from "./roles/admin/AdminAddIndividual";
import AdminFundingOpp from "./roles/admin/AdminFundingOpp";
import AdminMentorMatch from "./roles/admin/AdminMentorMatch";
import AdminNetwork from "./roles/admin/AdminNetwork";
import AdminUserResources from "./roles/admin/AdminUserResources";
import AdminVirtualIncubators from "./roles/admin/AdminVirtualIncubators";
import AdminProfile from "./roles/admin/AdminProfile";
import Settings from "./components/Settings";
import AdminViewFundingOpportunity from "./roles/admin/AdminViewFundingOpportunity";
import AdminViewAdmins from "./roles/admin/AdminViewAdmins";
import AdminViewUsers from "./roles/admin/AdminViewUsers";
import AdminUpdateUser from "./roles/admin/AdminUpdateUser";
import AdminViewNetwork from "./roles/admin/AdminViewNetwork ";
import SuperAdminDashboard from "./model/SuperAdminDashboard";
import SplashScreen from "./screens/SplashScreen";

function App() {
  return (
    <Router>
      <Routes>
        {/* For testing only */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/SplashScreen" element={<SplashScreen />} />
        {/* For SuperAdminDashboard */}
        <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
        {/* Admin routes as needed */}
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route
          path="/AdminAddIndividual"
          element={<AdminAddIndividual />}
        />{" "}
        {/* Linked on Dashboard */}
        <Route path="/AdminFundingOpp" element={<AdminFundingOpp />} />{" "}
        {/* Linked on Dashboard */}
        <Route path="/AdminMentorMatch" element={<AdminMentorMatch />} />{" "}
        {/* Linked on Dashboard */}
        <Route path="/AdminNetwork" element={<AdminNetwork />} />{" "}
        {/* Linked on Dashboard */}
        <Route
          path="/AdminUserResources"
          element={<AdminUserResources />}
        />{" "}
        {/* Linked on Dashboard */}
        <Route
          path="/AdminVirtualIncubators"
          element={<AdminVirtualIncubators />}
        />{" "}
        {/* Linked on Dashboard */}
        <Route path="/AdminProfile" element={<AdminProfile />} />{" "}
        {/* Linked on Dashboard */}
        <Route path="/AdminUpdateUser" element={<AdminUpdateUser />} />{" "}
        {/* Linked on Dashboard */}
        <Route
          path="/AdminViewFundingOpportunity"
          element={<AdminViewFundingOpportunity />}
        />{" "}
        {/* Linked on Dashboard */}
        <Route path="/AdminViewNetwork" element={<AdminViewNetwork />} />{" "}
        {/* Linked on Dashboard */}
        {/* User routes as needed */}
        <Route path="/UserDashboard" element={<UserDashboard />} />{" "}
        {/* Linked on Admin Dashboard Only */}
        <Route path="/UserResources" element={<UserResources />} />{" "}
        {/* Linked on Admin Dashboard Only */}
        <Route
          path="/NetworkingCollaboration"
          element={<NetworkingCollaboration />}
        />{" "}
        {/* Linked on Admin Dashboard Only */}
        <Route path="/MentorMatch" element={<MentorMatch />} />{" "}
        {/* Linked on Admin Dashboard Only */}
        <Route
          path="/FundingOpportunity"
          element={<FundingOpportunity />}
        />{" "}
        {/* Linked on Admin Dashboard Only */}
        <Route path="/VirtualIncubators" element={<VirtualIncubators />} />{" "}
        {/* Linked on Admin Dashboard Only */}
        <Route path="/AdminViewUsers" element={<AdminViewUsers />} />{" "}
        {/* Linked on Dashboard */}
        <Route path="/AdminViewAdmins" element={<AdminViewAdmins />} />{" "}
        {/* Linked on Dashboard */}
        {/* More functionality routes as needed */}
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
