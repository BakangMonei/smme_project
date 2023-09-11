import React from 'react';

const VirtualIncubators = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Virtual Incubators</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Virtual Co-Working Space */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <img
                            src="virtual-co-working.jpg"
                            alt="Virtual Co-Working Space"
                            className="w-full h-40 object-cover"
                        />
                        <div className="px-4 py-4">
                            <h3 className="text-md font-semibold">Virtual Co-Working Space</h3>
                            <p className="text-sm text-gray-600">
                                Description: Access a collaborative virtual workspace where you can work on your startup
                                projects alongside other entrepreneurs.
                            </p>
                            <p className="text-sm text-gray-600">Location: Online</p>
                            <p className="text-sm text-gray-600">
                                Website: <a href="#" className="text-blue-600">www.virtual-coworking.com</a>
                            </p>
                            <button
                                className="mt-4 px-4 py-2 border border-purple-600 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                onClick={() => {
                                    // Implement logic to join the virtual co-working space
                                    alert('Join Virtual Co-Working Space');
                                }}
                            >
                                Join Space
                            </button>
                        </div>
                    </div>

                    {/* Virtual Workshops */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <img
                            src="virtual-workshops.jpg"
                            alt="Virtual Workshops"
                            className="w-full h-40 object-cover"
                        />
                        <div className="px-4 py-4">
                            <h3 className="text-md font-semibold">Virtual Workshops</h3>
                            <p className="text-sm text-gray-600">
                                Description: Participate in virtual workshops conducted by industry experts. Learn
                                valuable skills for your startup journey.
                            </p>
                            <p className="text-sm text-gray-600">Location: Online</p>
                            <p className="text-sm text-gray-600">
                                Website: <a href="#" className="text-blue-600">www.virtual-workshops.com</a>
                            </p>
                            <button
                                className="mt-4 px-4 py-2 border border-purple-600 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                onClick={() => {
                                    // Implement logic to join virtual workshops
                                    alert('Join Virtual Workshops');
                                }}
                            >
                                Join Workshops
                            </button>
                        </div>
                    </div>

                    {/* Virtual Events */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <img
                            src="virtual-events.jpg"
                            alt="Virtual Events"
                            className="w-full h-40 object-cover"
                        />
                        <div className="px-4 py-4">
                            <h3 className="text-md font-semibold">Virtual Events</h3>
                            <p className="text-sm text-gray-600">
                                Description: Attend virtual startup events, network with other entrepreneurs, and gain
                                insights from industry leaders.
                            </p>
                            <p className="text-sm text-gray-600">Location: Online</p>
                            <p className="text-sm text-gray-600">
                                Website: <a href="#" className="text-blue-600">www.virtual-events.com</a>
                            </p>
                            <button
                                className="mt-4 px-4 py-2 border border-purple-600 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                                onClick={() => {
                                    // Implement logic to join virtual events
                                    alert('Join Virtual Events');
                                }}
                            >
                                Join Events
                            </button>
                        </div>
                    </div>

                    {/* Add more virtual incubator elements */}
                </div>
            </div>
        </div>
    );
};

export default VirtualIncubators;
