// Done [Working Vety Well]
import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

function FundingOpportunity() {
    const [fundingOpps, setFundingOpps] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingFundingOpp, setEditingFundingOpp] = useState({
        id: '',
        name: '',
        information: '',
        contacts: '',
        website: '',
        photo: '',
        country: '',
        minAmount: '',
        maxAmount: '',
        eligibleSectors: '',
        applyHere: '',
    });

    const fetchData = async () => {
        try {
            const fundingOppsCollection = collection(firestore, 'funds');
            const querySnapshot = await getDocs(fundingOppsCollection);
            const oppsData = [];
            querySnapshot.forEach((doc) => {
                oppsData.push({ id: doc.id, ...doc.data() });
            });
            setFundingOpps(oppsData);
        } catch (error) {
            console.error('Error fetching funding opportunities: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleApplyHere = async (id) => {
        // Implement the logic to open the "Apply" link based on the ID
        const opp = fundingOpps.find((fundingOpp) => fundingOpp.id === id);
        if (opp && opp.applyHere) {
            window.open(opp.applyHere, '_blank');
        }
    };

    const handleContact = async (id) => {
        // Implement the logic to handle "Inquire" based on the ID
        const opp = fundingOpps.find((fundingOpp) => fundingOpp.id === id);
        if (opp && opp.contacts) {
            // Handle contacting the opportunity
            console.log(`Contacting: ${opp.contacts}`);
        }
    };

    const handleWebsite = async (id) => {
        // Implement the logic to open the "Website" link based on the ID
        const opp = fundingOpps.find((fundingOpp) => fundingOpp.id === id);
        if (opp && opp.website) {
            window.open(opp.website, '_blank');
        }
    };

    return (
        <div className='min-h-screen'>
            <h1 className="text-4xl text-center font-bold mb-4">Funding Opportunities</h1>
            <div className="grid grid-cols-3 bg-white p-4 rounded-lg shadow-md mx-auto">
                {fundingOpps.map((fundingOpp) => (
                    <div key={fundingOpp.id} className="flex flex-auto mx-2 mb-4 p-4 border border-blue-500 rounded-lg">
                        <div>
                            <h2 className="text-xl font-semibold">{fundingOpp.name}</h2>
                            <img src={fundingOpp.photo} alt="Funding Opportunity" className="w-20 h-20 object-cover border border-blue-500 rounded-full mb-4" />
                            <p>{fundingOpp.information}</p>
                            <p>{fundingOpp.contacts}</p>
                            <p>{fundingOpp.website}</p>
                            <p>{fundingOpp.country}</p>
                            <p>{fundingOpp.minAmount}</p>
                            <p>{fundingOpp.maxAmount}</p>
                            <p>{fundingOpp.eligibleSectors}</p>
                            <p>{fundingOpp.applyHere}</p>
                            <div className="mt-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                                    onClick={() => handleContact(fundingOpp.id)}
                                >
                                    Inquire
                                </button>
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
                                    onClick={() => handleApplyHere(fundingOpp.id)}
                                >
                                    Apply
                                </button>
                                <button
                                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
                                    onClick={() => handleWebsite(fundingOpp.id)}
                                >
                                    Website
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FundingOpportunity;
