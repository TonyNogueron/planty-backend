const mysql = require("mysql2");

/*
const config = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
};
*/

/*
const config = {
  host: "testingclass1004b.ccdundegl4lm.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "",
  database: "Planty",
  multipleStatements: true,
};
*/

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "Planty",
  multipleStatements: true,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  } else {
    6;
    console.log("Connection established");
  }
});

module.exports = connection;
