const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
router.post('/login', authController.login);
router.route('/').get(userController.getAllUsers).post(userController.addUsers);
router.route('/:id').get(userController.getUsers);

module.exports = router;
