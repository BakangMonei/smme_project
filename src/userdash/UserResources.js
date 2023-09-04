import React from 'react';

const resourceData = {
    RESOURCEFUL_BOOKS: [
        {
            id: 1,
            url: 'book-url-1',
            name: 'Book 1',
            author: 'Author 1',
            about: 'About Book 1',
            category: 'Books',
        },
        {
            id: 1,
            url: 'book-url-1',
            name: 'Book 1',
            author: 'Author 1',
            about: 'About Book 1',
            category: 'Books',
        },
        {
            id: 1,
            url: 'book-url-1',
            name: 'Book 1',
            author: 'Author 1',
            about: 'About Book 1',
            category: 'Books',
        },
        {
            id: 1,
            url: 'book-url-1',
            name: 'Book 1',
            author: 'Author 1',
            about: 'About Book 1',
            category: 'Books',
        },
        {
            id: 1,
            url: 'book-url-1',
            name: 'Book 1',
            author: 'Author 1',
            about: 'About Book 1',
            category: 'Books',
        },
        {
            id: 1,
            url: 'book-url-1',
            name: 'Book 1',
            author: 'Author 1',
            about: 'About Book 1',
            category: 'Books',
        },
        // Add more books
    ],
    YOUTUBE_CHANNNELS: [
        {
            id: 1,
            link: 'youtube-channel-link-1',
            channelName: 'Channel 1',
            about: 'About Channel 1',
            category: 'YouTube Channels',
        },
        {
            id: 1,
            link: 'youtube-channel-link-1',
            channelName: 'Channel 1',
            about: 'About Channel 1',
            category: 'YouTube Channels',
        },
        {
            id: 1,
            link: 'youtube-channel-link-1',
            channelName: 'Channel 1',
            about: 'About Channel 1',
            category: 'YouTube Channels',
        },
        {
            id: 1,
            link: 'youtube-channel-link-1',
            channelName: 'Channel 1',
            about: 'About Channel 1',
            category: 'YouTube Channels',
        },
        {
            id: 1,
            link: 'youtube-channel-link-1',
            channelName: 'Channel 1',
            about: 'About Channel 1',
            category: 'YouTube Channels',
        },
        {
            id: 1,
            link: 'youtube-channel-link-1',
            channelName: 'Channel 1',
            about: 'About Channel 1',
            category: 'YouTube Channels',
        },
        // Add more YouTube channels
    ],
    WEBSITES: [
        {
            id: 1,
            webName: 'Website 1',
            url: 'website-url-1',
            about: 'About Website 1vgybuhnijfvgsdjfvsgbfhudkmbhndfijbvncihobacihle kvjbn cnmguvbhdacbsavbfdcihsjabo ',
            category: 'Websites',
        },
        {
            id: 2,
            webName: 'Website 1',
            url: 'website-url-1',
            about: 'About Website 1vgybuhnijfvgsdjfvsgbfhudkmbhndfijbvncihobacihle kvjbn cnmguvbhdacbsavbfdcihsjabo ',
            category: 'Websites',
        },
        {
            id: 3,
            webName: 'Website 1',
            url: 'website-url-1',
            about: 'About Website 1vgybuhnijfvgsdjfvsgbfhudkmbhndfijbvncihobacihle kvjbn cnmguvbhdacbsavbfdcihsjabo ',
            category: 'Websites',
        },
        {
            id: 4,
            webName: 'Website 1',
            url: 'website-url-1',
            about: 'About Website 1vgybuhnijfvgsdjfvsgbfhudkmbhndfijbvncihobacihle kvjbn cnmguvbhdacbsavbfdcihsjabo ',
            category: 'Websites',
        },
        {
            id: 5,
            webName: 'Website 1',
            url: 'website-url-1',
            about: 'About Website 1vgybuhnijfvgsdjfvsgbfhudkmbhndfijbvncihobacihle kvjbn cnmguvbhdacbsavbfdcihsjabo ',
            category: 'Websites',
        },
        {
            id: 6,
            webName: 'Website 1',
            url: 'website-url-1',
            about: 'About Website 1vgybuhnijfvgsdjfvsgbfhudkmbhndfijbvncihobacihle kvjbn cnmguvbhdacbsavbfdcihsjabo ',
            category: 'Websites',
        },
        // Add more websites
    ],
    CASE_STUDY: [
        {
            id: 1,
            url: 'case-study-1',
            name: 'Case Study 1',
            author: 'Case Study Author 1',
            about: 'About Case Study 1',
            category: 'Case Study',
        },
        {
            id: 1,
            url: 'case-study-1',
            name: 'Case Study 1',
            author: 'Case Study Author 1',
            about: 'About Case Study 1',
            category: 'Case Study',
        },
        {
            id: 1,
            url: 'case-study-1',
            name: 'Case Study 1',
            author: 'Case Study Author 1',
            about: 'About Case Study 1',
            category: 'Case Study',
        },
        {
            id: 1,
            url: 'case-study-1',
            name: 'Case Study 1',
            author: 'Case Study Author 1',
            about: 'About Case Study 1',
            category: 'Case Study',
        },
        {
            id: 1,
            url: 'case-study-1',
            name: 'Case Study 1',
            author: 'Case Study Author 1',
            about: 'About Case Study 1',
            category: 'Case Study',
        },
        {
            id: 1,
            url: 'case-study-1',
            name: 'Case Study 1',
            author: 'Case Study Author 1',
            about: 'About Case Study 1',
            category: 'Case Study',
        },
    ],
    


    // Add more categories and their respective resources
};

class UserResources extends React.Component {
    renderResourceBoxes(resources) {
        return resources.map(resource => (
            <div key={resource.id} className="p-4 border rounded shadow mb-4">
                <h2 className="text-lg font-semibold">{resource.name || resource.channelName || resource.webName}</h2>
                <p className="text-sm text-gray-600">{resource.about}</p>
                <a href={resource.url || resource.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {resource.url || resource.link}
                </a>
            </div>
        ));
    }

    renderCategories() {
        return Object.keys(resourceData).map(category => (
            <div key={category}>
                <h1 className="text-xl font-semibold mt-8">{category}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {this.renderResourceBoxes(resourceData[category])}
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-semibold mb-4">User Resources</h1>
                {this.renderCategories()}
            </div>
        );
    }
}

export default UserResources;