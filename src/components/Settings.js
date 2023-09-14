// Settings.js
import React from 'react';

const Settings = () => {
    const handleSignOut = () => {
        // Implement signout logic here, e.g., clearing user session.
        console.log('Signing out...');
    };

    const handleChangeTheme = (theme) => {
        // Implement theme change logic here.
        console.log(`Changing theme to ${theme}`);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <button
                onClick={handleSignOut}
                className="bg-red-500 text-white py-2 px-4 mr-4"
            >
                Sign Out
            </button>
            <label className="mr-2">Change Theme:</label>
            <select onChange={(e) => handleChangeTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            {/* Add other settings options here */}
        </div>
    );
};

export default Settings;
