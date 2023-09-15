const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIApi } = require('openai'); // Using the official OpenAI library

const app = express();
app.use(bodyParser.json());

const openai = new OpenAIApi({
    key: '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', // Replace with your actual OpenAI API key
});

// Define routes and route handlers here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
