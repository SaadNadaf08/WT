const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

// Create MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'bookdb',
    waitForConnections: true,
    connectionLimit: 10
});

app.use(express.json());
app.use(express.static('public'));

// API Endpoints
app.post('/books', async (req, res) => {
    try {
        const { title, author, isbn, publication_year } = req.body;
        const [result] = await pool.query(
            'INSERT INTO books (title, author, isbn, publication_year) VALUES (?, ?, ?, ?)',
            [title, author, isbn, publication_year]
        );
        res.status(201).json({ message: 'Book added', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/books/:isbn', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM books WHERE isbn = ?',
            [req.params.isbn]
        );
        rows.length ? res.json(rows[0]) : res.status(404).json({ error: 'Book not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/books/:isbn', async (req, res) => {
    try {
        const { title, author, publication_year } = req.body;
        const [result] = await pool.query(
            'UPDATE books SET title = ?, author = ?, publication_year = ? WHERE isbn = ?',
            [title, author, publication_year, req.params.isbn]
        );
        result.affectedRows ? res.json({ message: 'Book updated' }) : res.status(404).json({ error: 'Book not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/books/:isbn', async (req, res) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM books WHERE isbn = ?',
            [req.params.isbn]
        );
        result.affectedRows ? res.json({ message: 'Book deleted' }) : res.status(404).json({ error: 'Book not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all books
app.get('/books', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM books');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// CREATE DATABASE bookdb;
// USE bookdb;

// CREATE TABLE books (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     author VARCHAR(255) NOT NULL,
//     isbn VARCHAR(13) UNIQUE NOT NULL,
//     publication_year INT
// );