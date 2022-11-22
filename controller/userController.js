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
  let idUser;
  let message;

  connection.query(sql, [body.username, body.psswd], (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        idUser = result[0].idUser;
        message = "User logged in successfully";
        res.status(200).json({ idUser, message });
      } else {
        message = "User not found or incorrect password";
        res.status(404).json({ message });
      }
    }
  });
};

const validateUser = (req, res) => {
  const body = req.body;
  const sql = "SELECT * FROM User WHERE username = ?";
  connection.query(sql, [body.username], (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        res.status(200).send("User already exists");
      } else {
        res.status(202).send("User available");
      }
    }
  });
};

module.exports = { registerUser, getUsers, loginUser, validateUser };
