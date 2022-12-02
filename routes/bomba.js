const express = require("express");
const router = express.Router();
const bombaController = require("../controller/bombaController");

router.get("/pump", bombaController.getStatus);
router.put("/pump", bombaController.setStatus);

module.exports = router;
