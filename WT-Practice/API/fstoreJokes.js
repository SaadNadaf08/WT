const axios = require('axios');

// API configurations
const JOKES_API_URL = 'https://api.api-ninjas.com/v1/jokes';
const FAKE_STORE_API_URL = 'https://fakestoreapi.com/users';
// Replace with your actual API Ninjas key
const API_NINJAS_KEY = '9Ym8LJ57SV6UE4666fXctQ==8a8mFmHCea52T9mf';

// User data for Fake Store API
const newUser = {
  email: 'john.doe@example.com',
  username: 'johndoe',
  password: 'm38rmF$',
  name: {
    firstname: 'John',
    lastname: 'Doe'
  },
  address: {
    city: 'kilcoole',
    street: '7835 new road',
    number: 3,
    zipcode: '12926-3874',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496'
    }
  },
  phone: '1-570-236-7033'
};

async function callApis() {
  try {
    // Call Jokes API
    console.log('Calling Jokes API...');
    const jokesResponse = await axios.get(JOKES_API_URL, {
      headers: { 'X-Api-Key': API_NINJAS_KEY },
      params: { limit: 1 } // Get just one joke
    });
    console.log('Random Joke:');
    console.log(jokesResponse.data[0].joke);

    // Call Fake Store API to create user
    console.log('\nCreating user in Fake Store API...');
    const userResponse = await axios.post(FAKE_STORE_API_URL, newUser);
    console.log('User created successfully:');
    console.log({
      id: userResponse.data.id,
      username: userResponse.data.username,
      email: userResponse.data.email
    });

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