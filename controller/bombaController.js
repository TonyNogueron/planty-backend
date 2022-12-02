const connection = require("../config/mysqlConfig");

const getStatus = (req, res) => {
  const id = req.query.id;
  const sql = "SELECT pumpStatus FROM Plant WHERE idPlant = ?";
  connection.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      if (result[0].pumpStatus == 1) {
        res.status(202).json(result);
      } else {
        res.status(200).json(result);
      }
    }
  });
};

const setStatus = (req, res) => {
  const id = req.query.id;
  const status = req.query.status;
  const sql = "UPDATE Plant SET pumpStatus = ? WHERE idPlant = ?";
  connection.query(sql, [status, id], (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send("Pump status updated successfully");
    }
  });
};

module.exports = {
  getStatus,
  setStatus,
};
