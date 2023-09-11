import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleMessageSubmit = async (e) => {
        e.preventDefault();

        if (inputText.trim() === '') return;

        // Add the user's message to the chat history
        setChatHistory([...chatHistory, { text: inputText, isUser: true }]);
        setInputText('');

        try {
            // Send the user's message to the chatbot API
            const response = await axios.post('http://localhost:5000/api/chatbot', { message: inputText });

            // Add the chatbot's reply to the chat history
            setChatHistory([...chatHistory, { text: response.data.message, isUser: false }]);
        } catch (error) {
            console.error('Error sending message to chatbot:', error);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col justify-end bg-gray-100 p-4">
            <div className="flex-1 overflow-y-auto">
                {chatHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`${message.isUser ? 'justify-end' : 'justify-start'
                            } flex mb-2`}
                    >
                        <div
                            className={`${message.isUser
                                ? 'bg-blue-600 text-white rounded-br-lg rounded-t-lg'
                                : 'bg-gray-200 text-gray-800 rounded-bl-lg rounded-t-lg'
                                } max-w-2/3 p-2`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <form className="flex justify-between items-center mt-4" onSubmit={handleMessageSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
                <button
                    type="submit"
                    className="ml-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;
