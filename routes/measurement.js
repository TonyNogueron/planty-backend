const express = require("express");
const router = express.Router();
const measurementController = require("../controller/measurementController");

router.post("/measurement", measurementController.insertMeasurement);
router.get("/measurement", measurementController.getMeasurements);
router.get("/measurements", measurementController.getMeasurementsByPlant);
router.get(
  "/measurement/last",
  measurementController.getLastMeasurementByPlant
);

module.exports = router;
