const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// ✅ Serve index.html directly (no public folder)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'mysqlstudent.html'));
});

// ✅ MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Update this if needed
  database: 'college'
});

db.connect(err => {
  if (err) {
    console.error('MySQL Connection Error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// ✅ Handle form submission
app.post('/add-student', (req, res) => {
  const { id, name, age } = req.body;
  const sql = 'INSERT INTO student (id, name, age) VALUES (?, ?, ?)';
  db.query(sql, [id, name, age], (err) => {
    if (err) {
      return res.send('Error: ' + err.message);
    }
    res.send('Student added successfully.');
  });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
