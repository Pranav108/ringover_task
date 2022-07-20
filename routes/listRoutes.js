const express = require('express');
const listController = require('../controllers/listController');

const router = express.Router();
router.route('/').get(listController.getAllList).post(listController.addList);
router
  .route('/:id')
  .get(listController.getList)
  .patch(listController.updateList)
  .delete(listController.deleteList);

module.exports = router;
