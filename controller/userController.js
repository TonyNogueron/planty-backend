const connection = require("../config/mysqlConfig");

const registerUser = (req, res) => {
  const body = req.body;
  const sql =
    "INSERT INTO User (username, email, psswd) VALUES (?, ?, SHA2(?,224))";
  connection.query(
    sql,
    [body.username, body.email, body.psswd],
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("User registered successfully");
      }
    }
  );
};

const getUsers = (req, res) => {
  const sql = "SELECT * FROM User";
  connection.query(sql, (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const loginUser = (req, res) => {
  const body = req.body;
  const sql = "SELECT * FROM User WHERE username = ? AND psswd = SHA2(?,224)";
  connection.query(sql, [body.username, body.psswd], (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        res.status(200).send("User logged in successfully");
      } else {
        res.status(404).send("User not found");
      }
    }
  });
};

module.exports = { registerUser, getUsers, loginUser };
