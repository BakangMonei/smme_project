import LoginPage from './components/LoginPage';
import UserDashboard from './components/UserDashboard';
import RegisterPage from './components/RegisterPage'; // Import RegisterPage component
import ForgotPassword from './components/ForgotPassword'; // Import ForgotPassword component
import UserResources from './userdash/UserResources';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/RegisterPage" element={<RegisterPage />} /> 
        <Route path="/ForgotPassword" element={<ForgotPassword />} /> 
        <Route path="/UserResources" element={<UserResources />} /> 
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
