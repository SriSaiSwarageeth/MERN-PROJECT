const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',  // Change this if using a remote database
  user: 'newuser',
  password: 'newpassword',
  database: 'ecom_batch6'
});

// Check Connection
db.connect(err => {
  if (err) {
    console.error(' Database connection failed:', err);
    return;
  }
  console.log(' Connected to MySQL');
});

// API Route to Fetch Data
app.get('/users', (req, res) => {
  db.query('SELECT * FROM mobiles', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Database error', details: err.message });
      return;
    }
    res.json(results);
  });
});

// Start Server
app.listen(3000, () => {
  console.log(' Server running on http://localhost:3000');
});
