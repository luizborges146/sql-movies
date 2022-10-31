const mysql = require("mysql2");
const express = require("express");
const fs = require("fs");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Zjwin19970517@',
  database: 'movie_db'
});

app.get('/api/movies', (req, res) => {
  connection.query('SELECT * FROM movies', (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result);
  });
});

app.delete('/api/movies/:id', (req, res) => {
  connection.query(`DELETE id FROM movies`, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`This is the port localhost${PORT}`)
})