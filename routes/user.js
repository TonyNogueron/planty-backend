const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/user', userController.registerUser);
router.get('/user', userController.getUsers);
router.post('/user/login', userController.loginUser);

module.exports = router;