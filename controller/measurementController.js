const connection = require("../config/mysqlConfig");

const insertMeasurement = (req, res) => {
  const body = req.body;
  const sql =
    "INSERT INTO Measurement (collectionDate, airHumidity, temperature, light, earthHumidity, waterLevel, idPlant) VALUES (?, ?, ?, ?, ?, ?, ?);";
  connection.query(
    sql,
    [
      new Date(),
      body.airHumidity,
      body.temperature,
      body.light,
      body.earthHumidity,
      body.waterLevel,
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

module.exports = { insertMeasurement, getMeasurements };
