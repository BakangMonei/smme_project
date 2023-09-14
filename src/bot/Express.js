const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Define your chatbot API endpoint
app.post('/api/chatbot', async (req, res) => {
    try {
        const userMessage = req.body.message;

        // Implement your chatbot logic here to generate responses
        const chatbotResponse = await generateResponse(userMessage);

        res.json({ message: chatbotResponse });
    } catch (error) {
        console.error('Error communicating with chatbot:', error);
        res.status(500).json({ error: 'Chatbot error' });
    }
});

// Function to read responses from the text file
function readResponsesFromFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const lines = data.split('\n');
        return lines.map(line => line.trim());
    } catch (err) {
        console.error(`Error reading responses from ${filename}: ${err}`);
        return [];
    }
}

// Function to perform an internet search using Google Custom Search API
async function searchOnInternet(query) {
    const apiKey = 'bersk-8wjaj6looFxaPZhESdZ7T3BlbkFJL2ot8WjtOT8gEbJq96I3'; // Replace with your actual API key
    const cseId = 'b43a4af88f88a4806'; // Replace with your actual custom search engine ID

    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cseId}`;

    const response = await axios.get(apiUrl);
    return response.data;
}

// Function to generate a response based on user input, including internet searches
async function generateResponse(userMessage) {
    // Read responses from the text file
    const responses = readResponsesFromFile('responses.txt');

    // Iterate through responses to find a match
    for (const response of responses) {
        const [input, botResponse] = response.split('|');
        if (userMessage.toLowerCase().includes(input.toLowerCase())) {
            return botResponse;
        }
    }

    // If no match is found in the text file, perform an internet search
    try {
        const searchResponse = await searchOnInternet(userMessage);
        if (searchResponse.items && searchResponse.items.length > 0) {
            // Return the first search result as the response
            return searchResponse.items[0].title + ': ' + searchResponse.items[0].link;
        }
    } catch (error) {
        console.error('Error performing internet search:', error);
    }

    // If no match is found and the search fails, return a default response
    return "I'm sorry, I couldn't find any relevant information.";
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
