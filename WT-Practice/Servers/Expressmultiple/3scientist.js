const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Handle scientist pages
app.get('/:name', (req, res) => {
    const scientist = req.params.name.toLowerCase();
    const valid = ['einstein', 'curie', 'tesla'];
    
    valid.includes(scientist) 
        ? res.sendFile(path.join(__dirname, `${scientist}.html`))
        : res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Home page
app.get('/', (req, res) => {
    res.send(`
        <h1>Famous Scientists</h1>
        <ul>
            <li><a href="/einstein">Einstein</a></li>
            <li><a href="/curie">Curie</a></li>
            <li><a href="/tesla">Tesla</a></li>
        </ul>
        <link rel="stylesheet" href="style.css">
    `);
});

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));