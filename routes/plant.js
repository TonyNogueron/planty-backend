const express = require("express");
const router = express.Router();
const plantController = require("../controller/plantController");

const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/plant",
  upload.single("plantIconImage"),
  plantController.registerPlant
);
router.get("/plant", plantController.getPlants);
router.get("/plantById", plantController.getPlantsByUser);
router.delete("/plant", plantController.deletePlantById);
router.get("/plantByPlantId", plantController.getPlantById);
router.post(
  "/updatePlant",
  upload.single("plantIconImage"),
  plantController.updatePlant
);

module.exports = router;
