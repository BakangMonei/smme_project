import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgotPassword from './components/ForgotPassword';
import UserDashboard from './components/UserDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*To replace WizardContainer with FirstPage later after solving all the*/}
        <Route path="/" element={<UserDashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;