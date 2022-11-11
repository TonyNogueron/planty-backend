const mysql = require("mysql2");

const config = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  } else {
    console.log("Connection established");
  }
});

module.exports =  connection;
