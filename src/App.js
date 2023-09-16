import LoginPage from './components/LoginPage';
import UserDashboard from './model/UserDashboard';
import RegisterPage from './components/RegisterPage'; // Import RegisterPage component
import ForgotPassword from './components/ForgotPassword'; // Import ForgotPassword component
import UserResources from './userdash/UserResources';
import NetworkingCollaboration from './userdash/NetworkingCollaboration'
import MentorMatch from './userdash/MentorMatch'
import FundingOpportunity from './userdash/FundingOpportunity';
import AdminDashboard from './model/AdminDashboard';
import Chat from './bot/Chat';
import VirtualIncubators from './userdash/VirtualIncubators';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components
import AdminAddIndividual from './admin/AdminAddIndividual';
import AdminFundingOpp from './admin/AdminFundingOpp';
import AdminMentorMatch from './admin/AdminMentorMatch';
import AdminNetwork from './admin/AdminNetwork';
import AdminUserResources from './admin/AdminUserResources';
import AdminVirtualIncubators from './admin/AdminVirtualIncubators';
import AdminProfile from './admin/AdminProfile';
import Settings from './components/Settings';
import AdminViewFundingOpportunity from './admin/AdminViewFundingOpportunity'
import AdminViewAdmins from './admin/AdminViewAdmins';
import AdminViewUsers from './admin/AdminViewUsers';
import AdminUpdateUser from './admin/AdminUpdateUser';
import AdminViewNetwork from './admin/AdminViewNetwork ';


function App() {
  return (
    <Router>
      <Routes>
        {/* For testing only */}
        <Route path="/" element={<AdminViewNetwork />} />

        {/* Admin routes as needed */}
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminAddIndividual" element={<AdminAddIndividual />} /> {/* Linked on Dashboard */}
        <Route path="/AdminFundingOpp" element={<AdminFundingOpp />} /> {/* Linked on Dashboard */}
        <Route path="/AdminMentorMatch" element={<AdminMentorMatch />} /> {/* Linked on Dashboard */}
        <Route path="/AdminNetwork" element={<AdminNetwork />} /> {/* Linked on Dashboard */}
        <Route path="/AdminUserResources" element={<AdminUserResources />} />  {/* Linked on Dashboard */}
        <Route path="/AdminVirtualIncubators" element={<AdminVirtualIncubators />} /> {/* Linked on Dashboard */}
        <Route path="/AdminProfile" element={<AdminProfile />} /> {/* Linked on Dashboard */}
        <Route path="/AdminUpdateUser" element={<AdminUpdateUser />} />  {/* Linked on Dashboard */}
        <Route path="/AdminViewFundingOpportunity" element={<AdminViewFundingOpportunity />} /> {/* Linked on Dashboard */}
        <Route path ="/AdminViewNetwork" element={<AdminViewNetwork />} /> {/* Linked on Dashboard */}

        {/* User routes as needed */}
        <Route path="/UserDashboard" element={<UserDashboard />} /> {/* Linked on Admin Dashboard Only */}
        <Route path="/UserResources" element={<UserResources />} /> {/* Linked on Admin Dashboard Only */}
        <Route path="/NetworkingCollaboration" element={<NetworkingCollaboration />} /> {/* Linked on Admin Dashboard Only */}
        <Route path="/MentorMatch" element={<MentorMatch />} /> {/* Linked on Admin Dashboard Only */}
        <Route path="/FundingOpportunity" element={<FundingOpportunity />} />  {/* Linked on Admin Dashboard Only */}
        <Route path="/VirtualIncubators" element={<VirtualIncubators />} /> {/* Linked on Admin Dashboard Only */}

        <Route path="/AdminViewUsers" element={<AdminViewUsers />} />  {/* Linked on Dashboard */}
        <Route path="/AdminViewAdmins" element={<AdminViewAdmins />} /> {/* Linked on Dashboard */}

        {/* More functionality routes as needed */}
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Settings" element={<Settings />} />

        {/* ChatBot */}
        <Route path="/Chat" element={<Chat />} />

      </Routes>
    </Router>
  );
}

export default App;
