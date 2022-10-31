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
  password: 'Test1234!',
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
  connection.query("DELETE FROM movies WHERE id = ?", [response.move_id], (err, result) => { 
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



// +----+------------+
// | id | movie_name |
// +----+------------+
// |  1 | Matrix     |
// |  2 | Spider-Man |
// |  3 | Rocky      |
// |  4 | Holloween  |
// |  5 | Top gun    |
// +----+------------+

// +----+---------+----------+
// | id | review  | movie_id |
// +----+---------+----------+
// |  1 | 4 Stars |        1 |
// |  2 | 3 Stars |        2 |
// |  3 | 4 Stars |        3 |
// |  4 | 3 Stars |        4 |
// |  5 | 5 Stars |        5 |
// |  6 | 2 Stars |        2 |
// +----+---------+----------+