require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mysql_todo_list",
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is ready on port : ", port));
