// AdminProfile.js
import React, { Component } from 'react';

class AdminProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            gender: '',
            phoneNumber: '',
            password: '',
            postalAddress: '',
            physicalAddress: '',
            LinkedIn: '',
            twitter: '',
            whatsapp: '',
            discord: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // You can send this data to your backend for updating the profile
        console.log('Updated Profile Data:', this.state);
    }

    render() {
        return (
            <div className="container mx-auto mt-8">
                <form className="w-1/2 mx-auto" onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="firstname">First Name:</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastname">Last Name:</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender">Gender:</label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postalAddress">Postal Address:</label>
                        <input
                            type="text"
                            id="postalAddress"
                            name="postalAddress"
                            value={this.state.postalAddress}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="physicalAddress">Physical Address:</label>
                        <input
                            type="text"
                            id="physicalAddress"
                            name="physicalAddress"
                            value={this.state.physicalAddress}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="LinkedIn">LinkedIn:</label>
                        <input
                            type="text"
                            id="LinkedIn"
                            name="LinkedIn"
                            value={this.state.LinkedIn}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="twitter">Twitter:</label>
                        <input
                            type="text"
                            id="twitter"
                            name="twitter"
                            value={this.state.twitter}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="whatsapp">WhatsApp:</label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={this.state.whatsapp}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="discord">Discord:</label>
                        <input
                            type="text"
                            id="discord"
                            name="discord"
                            value={this.state.discord}
                            onChange={this.handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4">
                        Update Profile
                    </button>
                </form>
            </div>
        );
    }
}

export default AdminProfile;
