import React, { useState } from 'react';
import test from '../images/test_img.jpg';

const FundingOpportunity = () => {
    const fundingResources = [
        {
            id: 1,
            name: 'SMME Funding Guide',
            information: 'Comprehensive guide on different funding options available for SMMEs.',
            contacts: 'John Doe (john@example.com)',
            website: 'https://www.smme-funding-guide.com',
            photo: test,
            country: 'United States',
            minAmount: '$10,000',
            maxAmount: '$100,000',
            eligibleSectors: ['Technology', 'Healthcare', 'Manufacturing'],
            ApplyHere: 'https://www.smme-funding-guide.com',
        },
        {
            id: 2,
            name: 'Investor Connection Workshop',
            information: 'Learn how to connect with potential investors through this workshop.',
            contacts: 'Jane Smith (jane@example.com)',
            website: 'https://www.investor-workshop.com',
            photo: 'investor-workshop.jpg',
            country: 'Canada',
            minAmount: '$5,000',
            maxAmount: '$50,000',
            eligibleSectors: ['Technology', 'Finance', 'Hospitality'],
            ApplyHere: 'https://www.investor-workshop.com',
        },
        // Add more funding resources
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredResources = fundingResources.filter((resource) => {
        return (
            resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.information.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.contacts.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.ApplyHere.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.minAmount.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.maxAmount.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.eligibleSectors.some((sector) => sector.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Funding and Investment Resources</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by name, information, contacts, website, country, min amount, max amount, or eligible sectors"
                        className="px-4 py-2 border border-gray-300 rounded-lg w-full"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource) => (
                        <div key={resource.id} className="bg-white rounded-lg shadow overflow-hidden">
                            <img src={resource.photo} alt={resource.name} className="w-full h-40 object-cover" />
                            <div className="px-4 py-4">
                                <h3 className="text-md font-semibold">{resource.name}</h3>
                                <p className="text-sm text-gray-600">Information: {resource.information}</p>
                                <p className="text-sm text-gray-600">Contacts: {resource.contacts}</p>
                                <p className="text-sm text-gray-600">Website: <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-blue-600">{resource.website}</a></p>
                                <p className="text-sm text-gray-600">Country: {resource.country}</p>
                                <p className="text-sm text-gray-600">Min Amount: {resource.minAmount}</p>
                                <p className="text-sm text-gray-600">Max Amount: {resource.maxAmount}</p>
                                <p className="text-sm text-gray-600">Eligible Sectors: {resource.eligibleSectors.join(', ')}</p>
                                <p className="text-sm text-gray-600">ApplyHere: <a href={resource.ApplyHere} target="_blank" rel="noopener noreferrer" className="text-blue-600">{resource.ApplyHere}</a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FundingOpportunity;
