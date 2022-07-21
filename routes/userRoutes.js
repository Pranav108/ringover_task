const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.route('/').get(userController.getAllUsers).post(userController.addUsers);
router
  .route('/:id')
  .get(userController.getUsers)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
