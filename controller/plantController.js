const connection = require("../config/mysqlConfig");

const registerPlant = (req, res) => {
  const body = req.body;
  const sql =
    "INSERT INTO Plant (plantName, plantType, idUser) VALUES (?, ?, ?)";
  connection.query(
    sql,
    [body.plantName, body.plantType, body.idUser],
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Plant registered successfully");
      }
    }
  );
};

const getPlants = (req, res) => {
  const sql = "SELECT * FROM Plant";
  connection.query(sql, (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = { registerPlant, getPlants };
