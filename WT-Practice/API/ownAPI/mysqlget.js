const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'college'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// GET endpoint to fetch form data
app.get('/api/companies', (req, res) => {
    const query = 'SELECT * FROM companies';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// http://localhost:3000/api/companies