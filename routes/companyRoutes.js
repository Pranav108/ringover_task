const express = require('express');
const companyController = require('../controllers/companyController');

const router = express.Router();
router
  .route('/')
  .get(companyController.getAllCompany)
  .post(companyController.addCompany);
router
  .route('/:id')
  .get(companyController.getCompany)
  .delete(companyController.deleteCompany);

module.exports = router;
