// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const db = new sqlite3.Database('./chatbot.db');

app.use(cors());
app.use(bodyParser.json());

// Create a table if not exists
db.run('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, text TEXT)');

// Get all messages
app.get('/messages', (req, res) => {
  db.all('SELECT * FROM messages', (err, rows) => {
    if (err) {
      res.status(500).send('Error fetching messages');
    } else {
      res.json(rows);
    }
  });
});

// Post a new message
app.post('/messages', (req, res) => {
  const { message } = req.body;
  db.run('INSERT INTO messages (text) VALUES (?)', [message], function (err) {
    if (err) {
      res.status(500).send('Error inserting message');
    } else {
      res.json({ id: this.lastID, text: message });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
