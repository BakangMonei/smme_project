import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        { role: 'user', content: message },
                    ],
                },
                {
                    headers: {
                        'Authorization': 'Bearer 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', // Replace with your API key
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data.choices && response.data.choices[0].message && response.data.choices[0].message.content) {
                const chatbotMessage = response.data.choices[0].message.content;

                // Reverse the order of messages and add the new messages to the beginning
                setMessages([
                    { text: chatbotMessage, user: 'bot' },
                    { text: message, user: 'user' },
                    ...messages,
                ]);

                setMessage('');
            } else {
                console.error('Invalid response from the API');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="w-96 mx-auto mt-8">
            <div className="border p-4 h-80 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`text-gray-600 ${msg.user === 'user' ? 'text-right' : 'text-left'
                            }`}
                    >
                        <p className="mb-2">{msg.text}</p>
                        <span className="text-xs">{msg.user}</span>
                    </div>
                ))}
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Type a message..."
                />
                <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chat;
