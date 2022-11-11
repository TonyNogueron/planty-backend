const express = require('express');
const router = express.Router();
const plantController = require('../controller/plantController');

router.post('/plant', plantController.registerPlant);
router.get('/plant', plantController.getPlants);

module.exports = router;