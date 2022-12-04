const connection = require("../config/mysqlConfig");

const sharp = require("sharp");

const registerPlant = async (req, res) => {
  const file = req.file;
  const body = req.body;
  const fileBuffer = await sharp(file.buffer)
    .resize({ height: 600, width: 600, fit: "cover" })
    .toBuffer();

  const imageBase64 = fileBuffer.toString("base64");

  const sql =
    "INSERT INTO Plant (plantName, plantType, idUser, plantImage) VALUES (?, ?, ?, ?);";
  connection.query(
    sql,
    [body.plantName, body.plantType, body.idUser, imageBase64],
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("Plant registered successfully");
      }
    }
  );
};

/*
const registerPlant = (req, res) => {
  const body = req.body;
  console.log(body);
  /*
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
*/

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

const getPlantsByUser = (req, res) => {
  const id = req.query.id;
  const sql = "SELECT * FROM Plant WHERE idUser = ?";
  connection.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const getPlantById = (req, res) => {
  const id = req.query.id;
  const sql = "SELECT * FROM Plant WHERE idPlant = ?";
  connection.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const deletePlantById = (req, res) => {
  const id = req.query.id;
  const sql = "DELETE FROM Plant WHERE idPlant = ?";
  connection.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send("Plant deleted successfully");
    }
  });
};

const updatePlant = async (req, res) => {
  const body = req.body;
  const file = req.file;

  if (file) {
    const fileBuffer = await sharp(file.buffer)
      .resize({ height: 600, width: 600, fit: "cover" })
      .toBuffer();

    const imageBase64 = fileBuffer.toString("base64");

    const sql =
      "UPDATE Plant SET plantName = ?, plantType = ?, plantImage = ? WHERE idPlant = ?";
    connection.query(
      sql,
      [body.plantName, body.plantType, imageBase64, body.idPlant],
      (err, result, fields) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  } else {
    const sql =
      "UPDATE Plant SET plantName = ?, plantType = ? WHERE idPlant = ?";
    connection.query(
      sql,
      [body.plantName, body.plantType, body.idPlant],
      (err, result, fields) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  }
};

module.exports = {
  registerPlant,
  getPlants,
  getPlantsByUser,
  deletePlantById,
  getPlantById,
  updatePlant,
};
