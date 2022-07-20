const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();
router.route('/').get(taskController.getAllTask).post(taskController.addTask);
router
  .route('/users-list/:userid/listname/:listname/completed/:status')
  .get(taskController.fetchUsersTask);
router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
