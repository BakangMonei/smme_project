import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage'; // Import your LoginPage component
import AdminDashboard from './AdminDashboard'; // Import your AdminDashboard component
import UserDashboard from './UserDashboard'; // Import your UserDashboard component
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component
import SuperAdminDashboard from '../model/SuperAdminDashboard';

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Use Firebase or your authentication logic to determine if the user is authenticated
        // Update the authenticated state accordingly
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/LoginPage" component={LoginPage} />
                <PrivateRoute
                    path="/AdminDashboard"
                    component={AdminDashboard}
                    authenticated={authenticated}
                />
                <PrivateRoute
                    path="/UserDashboard"
                    component={UserDashboard}
                    authenticated={authenticated}
                />
                <PrivateRoute
                    path="/SuperAdminDashboard"
                    component={SuperAdminDashboard}
                    authenticated={authenticated}
                />

                {/* Add other routes as needed */}
            </Switch>
        </Router>
    );
}

export default App;
