const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: '192.168.48.131',
  user: 'root',
  password: 'nutanix/4u',
  database: 'barny'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '')));

// API endpoint to handle form submission
app.post('/Book-Page/Book.html', (req, res) => {
  const formData = req.body;

  // Insert form data into the database
  const query = 'INSERT INTO form_data SET ?';
  connection.query(query, formData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      console.log('Form data inserted successfully');
      res.status(200).send('Form data inserted successfully');
    }
  });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
