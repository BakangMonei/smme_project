import React, { useState } from 'react';
import test from '../images/test_img.jpg';

const NetworkingCollaboration = () => {
    const sectors = [
        {
            id: 1,
            name: '1. Technology And Software Development',
            companies: [
                {
                    id: 1,
                    name: 'Digital Solutions Inc.',
                    phoneNumber: '123-456-7890',
                    founder: 'John Doe',
                    sector: 'Digital Marketing',
                    email: 'john@example.com',
                    location: 'New York, NY',
                    website: 'https://www.digitalsolutions.com',
                    logo: test, // Add the URL of the company logo image
                },
                {
                    id: 1,
                    name: 'Digital Solutions Inc.',
                    phoneNumber: '123-456-7890',
                    founder: 'John Doe',
                    sector: 'Digital Marketing',
                    email: 'john@example.com',
                    location: 'New York, NY',
                    website: 'https://www.digitalsolutions.com',
                    logo: test, // Add the URL of the company logo image
                },
                {
                    id: 1,
                    name: 'Digital Solutions Inc.',
                    phoneNumber: '123-456-7890',
                    founder: 'John Doe',
                    sector: 'Digital Marketing',
                    email: 'john@example.com',
                    location: 'New York, NY',
                    website: 'https://www.digitalsolutions.com',
                    logo: test, // Add the URL of the company logo image
                },

            ],
        },
        {
            id: 2,
            name: '2. Digital Marketing And E-Commerce',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 3,
            name: '3. Business and Entrepreneurship',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 4,
            name: '4. Finance and Investment',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 5,
            name: '5. Healthcare and Wellness',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 6,
            name: '6. Manufacturing and Product Development',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 7,
            name: '7.Hospitality and Tourism',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 8,
            name: '8. Creative and Media',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 9,
            name: '9. Retail and Merchandising',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 10,
            name: '10. Education and Training',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 11,
            name: '11. Environmental Sustainability',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 12,
            name: '12. Legal and Compliance',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 13,
            name: '13. Non-profit and Social Enterprises',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        {
            id: 14,
            name: '14. Real Estate and Property Management',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        // Sector 15
        {
            id: 15,
            name: '15. Farming and Agricultural Practices',
            companies: [
                {
                    id: 2,
                    name: 'Tech Innovators Co.',
                    phoneNumber: '987-654-3210',
                    founder: 'Jane Smith',
                    sector: 'Product Development',
                    email: 'jane@example.com',
                    location: 'San Francisco, CA',
                    website: 'https://www.techinnovators.com',
                    logo: 'https://example.com/logo2.png', // Add the URL of the company logo image
                },
            ],
        },
        // Add more sectors and companies
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredSectors = sectors.map((sector) => {
        return {
            ...sector,
            companies: sector.companies.filter((company) => {
                // Filter companies based on search term and attributes
                return (
                    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    company.phoneNumber.includes(searchTerm) ||
                    company.founder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    company.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    company.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    company.website.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }),
        };
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Networking and Collaboration</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by name, founder, sector, email, location, or website"
                        className="px-4 py-2 border border-gray-300 rounded-lg w-full"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                {filteredSectors.map((sector) => (
                    <div key={sector.id}>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">{sector.name}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sector.companies.map((company) => (
                                <div key={company.id} className="bg-white rounded-lg shadow overflow-hidden">
                                    <div className="px-4 py-4">
                                        <div className="mb-2">
                                            <img src={company.logo} alt={company.name} className="w-20 h-20 object-cover rounded-full mx-auto" />
                                        </div>
                                        <h3 className="text-md font-semibold text-center">{company.name}</h3>
                                        <p className="text-sm text-gray-600">Founder: {company.founder}</p>
                                        <p className="text-sm text-gray-600">Sector: {company.sector}</p>
                                        <p className="text-sm text-gray-600">Phone: {company.phoneNumber}</p>
                                        <p className="text-sm text-gray-600">Email: {company.email}</p>
                                        <p className="text-sm text-gray-600">Location: {company.location}</p>
                                        <a
                                            href={company.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600"
                                        >
                                            Website
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NetworkingCollaboration;
