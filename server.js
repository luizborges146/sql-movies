const mysql = require("mysql2");
const express = require("express");
const { appendFile } = require("fs");


const PORT = 3001;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Test1234!',
    database: 'movie_db'
  });



appendFile.listen(PORT, () => {
    console.log(`This is the port localhost${PORT}`)

})