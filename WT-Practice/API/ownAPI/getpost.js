const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // to serve index.html

// GET method
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello! This is a GET request.' });
});

// POST method
app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.json({ message: `Hello, ${name}! This is a POST request.` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
