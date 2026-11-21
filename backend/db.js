const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ayush@1506",
  database: "studentManagement",
  port: 3306,
});


db.connect((error) => {
  if (error) {
    console.log("MariaDB Connection Failed:", error);
  } else {
    console.log("MariaDB Connected Successfully!");
  }
});

module.exports = db;