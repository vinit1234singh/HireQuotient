// utils/llm.js
const axios = require('axios');

const getLLMResponse = async (message) => {
  // Mock implementation, replace with actual API call
  try {
    const response = await axios.post('https://api.example.com/llm', {
      prompt: message
    }, { timeout: 10000 });

    return response.data.response;
  } catch (error) {
    console.error('LLM API error:', error.message);
    return 'The user is currently busy. Please try again later.';
  }
};

module.exports = { getLLMResponse };
