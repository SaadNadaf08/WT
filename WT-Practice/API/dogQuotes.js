const axios = require('axios');

// API configurations
const DOG_API_URL = 'https://dog.ceo/api/breeds/list/all';
const QUOTES_API_URL = 'https://api.api-ninjas.com/v1/quotes';
// Replace with your actual API Ninjas key
const API_NINJAS_KEY = '9Ym8LJ57SV6UE4666fXctQ==8a8mFmHCea52T9mf'; 

async function callApis() {
  try {
    // Call Dog API
    console.log('Calling Dog API...');
    const dogResponse = await axios.get(DOG_API_URL);
    console.log('Dog Breeds:');
    console.log(Object.keys(dogResponse.data.message).slice(0, 10)); // Show first 10 breeds
    console.log(`Total breeds: ${Object.keys(dogResponse.data.message).length}`);

    // Call Quotes API
    console.log('\nCalling Quotes API...');
    const quotesResponse = await axios.get(QUOTES_API_URL, {
      headers: { 'X-Api-Key': API_NINJAS_KEY }
    });
    console.log('Random Quote:');
    console.log(`"${quotesResponse.data[0].quote}" - ${quotesResponse.data[0].author}`);

  } catch (error) {
    console.error('Error calling APIs:', error.message);
    if (error.response) {
      console.error('API Response Error:', {
        status: error.response.status,
        data: error.response.data
      });
    }
  }
}

callApis();