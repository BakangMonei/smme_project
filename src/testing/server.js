const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIApi } = require('openai'); // Using the official OpenAI library

const app = express();
app.use(bodyParser.json());

const openai = new OpenAIApi({
    key: 'bersk-8wjaj6looFxaPZhESdZ7T3BlbkFJL2ot8WjtOT8gEbJq96I3', // Replace with your actual OpenAI API key
});

// Define routes and route handlers here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
