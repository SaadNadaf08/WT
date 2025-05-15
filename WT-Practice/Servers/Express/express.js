const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve HTML file for root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'sample.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});