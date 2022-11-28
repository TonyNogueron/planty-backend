const connection = require("../config/mysqlConfig");

const insertMeasurement = (req, res) => {
  const body = req.body;
  const sql =
    "INSERT INTO Measurement (collectionDate, airHumidity, temperature, light, earthHumidity, idPlant) VALUES (?, ?, ?, ?, ?, ?);";
  connection.query(
    sql,
    [
      new Date(),
      body.airHumidity,
      body.temperature,
      body.light,
      body.earthHumidity,
      body.idPlant,
    ],
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Measurement registered successfully");
      }
    }
  );
};

const getMeasurements = (req, res) => {
  const sql = "SELECT * FROM Measurement";
  connection.query(sql, (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const getMeasurementsByPlant = (req, res) => {
  const id = req.query.id;
  const sql = "SELECT * FROM Measurement WHERE idPlant = ?";
  connection.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const getLastMeasurementByPlant = (req, res) => {
  const id = req.query.id;
  const sql =
    "SELECT * FROM Measurement WHERE idPlant = ? ORDER BY idMeasurement DESC LIMIT 1";
  connection.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = {
  insertMeasurement,
  getMeasurements,
  getMeasurementsByPlant,
  getLastMeasurementByPlant,
};
