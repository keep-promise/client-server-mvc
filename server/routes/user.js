const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

router.get('/hello', UserController.createUser);

module.exports = router