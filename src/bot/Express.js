const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
app.use(bodyParser.json());

// Allow requests from all origins (adjust this based on your security requirements)
app.use(cors());

// Define your chatbot API endpoint
app.post('/api/chatbot', (req, res) => {
    try {
        const userMessage = req.body.message;

        // Implement your chatbot logic here to generate responses
        const chatbotResponse = generateResponse(userMessage);

        res.json({ message: chatbotResponse });
    } catch (error) {
        console.error('Error communicating with chatbot:', error);
        res.status(500).json({ error: 'Chatbot error' });
    }
});

function generateResponse(userMessage) {
    // Implement your chatbot logic here based on userMessage
    // This is a simplified example, and you can make it as complex as needed
    if (userMessage.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you?';
    } else if (userMessage.toLowerCase().includes('goodbye')) {
        return 'Goodbye! Have a great day!';
    } else {
        return "I'm sorry, I didn't understand that.";
    }
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
