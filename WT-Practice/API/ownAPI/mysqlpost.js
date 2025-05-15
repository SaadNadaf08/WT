const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MySQL connection (same as above)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'college'
});

// POST endpoint to insert form data
app.post('/api/companies', (req, res) => {
    const { name, logo_url } = req.body;
    
    if (!name || !logo_url) {
        return res.status(400).json({ error: 'Name and logo URL are required' });
    }

    const query = 'INSERT INTO companies (name, logo_url) VALUES (?, ?)';
    db.query(query, [name, logo_url], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Company added successfully',
            companyId: result.insertId
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});