const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Define your OpenAI API key
const openaiApiKey = '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'; // Replace with your actual API key

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
async function searchOnInternet(userMessage) {
    // Replace the following with your Google Custom Search API code (apiKey and cseId)
    const apiKey = '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'; // Replace with your actual API key
    const cseId = 'b43a4af88f88a4806'; // Replace with your actual custom search engine ID

    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${userMessage}&key=${apiKey}&cx=${cseId}`;

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
        const response = await searchOnInternet(userMessage);
        if (response.items && response.items.length > 0) {
            // Return the first search result as the response
            return response.items[0].title + ': ' + response.items[0].link;
        }
    } catch (error) {
        console.error('Error performing internet search:', error);
    }

    // If no match is found and the search fails, use OpenAI to generate a response
    try {
        const response = await generateOpenAIResponse(userMessage);
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error generating response from OpenAI:', error);
    }

    // If all else fails, return a default response
    return "I'm sorry, I couldn't find any relevant information.";
}

// Function to generate a response using OpenAI's GPT-3
async function generateOpenAIResponse(userMessage) {
    const openaiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
    };

    const requestBody = {
        prompt: userMessage,
        max_tokens: 50 // Adjust the max_tokens as needed
    };

    return axios.post(openaiUrl, requestBody, { headers });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
