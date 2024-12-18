import React, { useState } from 'react';
import test from '../images/test_img.jpg';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiFacebook, FiPhone } from 'react-icons/fi'; // Import icons for Mail, Facebook, and Phone

export const MentorMatch = () => {
    const [activeMentor, setActiveMentor] = useState(null);

    const sectors = [
        // Sector 1
        {
            id: 1,
            name: '1. Technology and Software Development',
            mentors: [
                {
                    id: 1,
                    name: 'Mr. Monei Bakang',
                    expertise: 'Software Engineer',
                    description: 'Experienced in OOAD and AI',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/johndoe',
                    mail: 'johndoe@example.com',
                    facebook: 'https://www.facebook.com/johndoe',
                    phoneNumber: '+267 72711192',
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    expertise: 'Mobile App Development',
                    description: 'Expert in creating and executing effective social media campaigns.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/janesmith',
                    mail: 'janesmith@example.com',
                    facebook: 'https://www.facebook.com/janesmith',
                    phoneNumber: '+9876543210',
                },
                {
                    id: 3,
                    name: 'Jane Smith',
                    expertise: 'Software Engineering',
                    description: 'Expert in creating and executing effective social media campaigns.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/janesmith',
                    mail: 'janesmith@example.com',
                    facebook: 'https://www.facebook.com/janesmith',
                    phoneNumber: '+9876543210',
                },
                {
                    id: 4,
                    name: 'Jane Smith',
                    expertise: 'Data Science and Analytics',
                    description: 'Expert in creating and executing effective social media campaigns.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/janesmith',
                    mail: 'janesmith@example.com',
                    facebook: 'https://www.facebook.com/janesmith',
                    phoneNumber: '+9876543210',
                },
                {
                    id: 5,
                    name: 'Jane Smith',
                    expertise: 'Artificial Intelligence and Machine Learning',
                    description: 'Expert in creating and executing effective social media campaigns.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/janesmith',
                    mail: 'janesmith@example.com',
                    facebook: 'https://www.facebook.com/janesmith',
                    phoneNumber: '+9876543210',
                },
                {
                    id: 6,
                    name: 'Jane Smith',
                    expertise: 'CyberOps & DevOps',
                    description: 'Expert in creating and executing effective social media campaigns.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/janesmith',
                    mail: 'janesmith@example.com',
                    facebook: 'https://www.facebook.com/janesmith',
                    phoneNumber: '+9876543210',
                },
                // Add more mentors in this sector
            ],
        },
        // Sector 2
        {
            id: 2,
            name: '2. Digital Marketing and E-commerce',
            mentors: [
                {
                    id: 7,
                    name: 'Michael Johnson',
                    expertise: 'Search Engine Optimization (SEO)r',
                    description: 'Skilled in product development, agile methodologies, and UX design.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/michaeljohnson',
                    mail: 'michael@example.com',
                    facebook: 'https://www.facebook.com/michaeljohnson',
                    phoneNumber: '+1112223333',
                },
                {
                    id: 8,
                    name: 'Emily White',
                    expertise: 'UI/UX Designer',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 9,
                    name: 'Emily White',
                    expertise: 'Social Media Marketing',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 10,
                    name: 'Emily White',
                    expertise: 'Content Marketing',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 11,
                    name: 'Emily White',
                    expertise: 'E-commerce Strategies',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 12,
                    name: 'Emily White',
                    expertise: 'Email Marketing',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                // Add more mentors in this sector
            ],
        },

        // Sector 3
        {
            id: 3,
            name: '3. Business and Entrepreneurship',
            mentors: [
                {
                    id: 13,
                    name: 'Michael Johnson',
                    expertise: 'Business Management',
                    description: 'Skilled in product development, agile methodologies, and UX design.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/michaeljohnson',
                    mail: 'michael@example.com',
                    facebook: 'https://www.facebook.com/michaeljohnson',
                    phoneNumber: '+1112223333',
                },
                {
                    id: 14,
                    name: 'Emily White',
                    expertise: 'Business Strategy',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 15,
                    name: 'Emily White',
                    expertise: 'Business Planning',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 16,
                    name: 'Emily White',
                    expertise: 'Marketing Strategy',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 17,
                    name: 'Emily White',
                    expertise: 'Financial Management',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Start-up Growth Strategies',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                // Add more mentors in this sector
            ],
        },

        // Sector 4
        {
            id: 4,
            name: '4. Finance and Investment',
            mentors: [
                {
                    id: 19,
                    name: 'Michael Johnson',
                    expertise: 'Market Analyst',
                    description: 'Skilled in product development, agile methodologies, and UX design.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/michaeljohnson',
                    mail: 'michael@example.com',
                    facebook: 'https://www.facebook.com/michaeljohnson',
                    phoneNumber: '+1112223333',
                },
                {
                    id: 14,
                    name: 'Emily White',
                    expertise: 'Financial Planning',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 15,
                    name: 'Emily White',
                    expertise: 'Investment Strategies',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 16,
                    name: 'Emily White',
                    expertise: 'Accounting and Bookkeeping',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 17,
                    name: 'Emily White',
                    expertise: 'Taxation',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
                // Add more mentors in this sector
            ],
        },
        // Sector 5
        {
            id: 5,
            name: '5. Healthcare and Wellness',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 6
        {
            id: 6,
            name: '6. Manufacturing and Product Development',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        
        // Sector 7
        {
            id: 7,
            name: '7.Hospitality and Tourism',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 8
        {
            id: 8,
            name: '8. Creative and Media',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 9
        {
            id: 9,
            name: '9. Retail and Merchandising',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 10
        {
            id: 10,
            name: '10. Education and Training',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 11
        {
            id: 11,
            name: '11. Environmental Sustainability',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 12
        {
            id: 12,
            name: '12. Legal and Compliance',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 13
        {
            id: 13,
            name: '13. Non-profit and Social Enterprises',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 14
        {
            id: 14,
            name: '14. Real Estate and Property Management',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Sector 15
        {
            id: 15,
            name: '15. Agriculture and Agribusiness',
            mentors: [
                {
                    id: 18,
                    name: 'Emily White',
                    expertise: 'Funding and Capital Raising',
                    description: 'Experienced in creating user-friendly and visually appealing interfaces.',
                    image: test,
                    linkedin: 'https://www.linkedin.com/in/emilywhite',
                    mail: 'emily@example.com',
                    facebook: 'https://www.facebook.com/emilywhite',
                    phoneNumber: '+4445556666',
                },
            ],
        },
        // Add more sectors

    ];

    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {sectors.map((sector) => (
                    <div key={sector.id}>
                        <h1 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{sector.name}</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sector.mentors.map((mentor) => (
                                <div key={mentor.id} className="bg-white rounded-lg shadow overflow-hidden">
                                    <img src={mentor.image} alt={mentor.name} className="w-full h-40 object-cover" />
                                    <div className="px-4 py-4">
                                        <h2 className="text-lg font-semibold">{mentor.name}</h2>
                                        <p className="text-sm text-gray-500">{mentor.expertise}</p>
                                        <p className="mt-2 text-sm text-gray-600">{mentor.description}</p>

                                        {activeMentor === mentor.id ? (
                                            <div className="mt-4">
                                                <div className="flex items-center space-x-2">
                                                    <AiFillLinkedin />
                                                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                                </div>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <FiMail />
                                                    <a href={`mailto:${mentor.mail}`}>Mail</a>
                                                </div>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <FiFacebook />
                                                    <a href={mentor.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                                                </div>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <FiPhone />
                                                    <span>{mentor.phoneNumber}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                className="mt-4 px-4 py-2 border border-purple-600 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                                onClick={() => {
                                                    setActiveMentor(mentor.id);
                                                }}
                                            >
                                                Show Contact
                                            </button>
                                        )}
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

export default MentorMatch;
