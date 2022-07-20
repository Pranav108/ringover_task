const express = require('express');
const companyController = require('../controllers/companyController');
const authController = require('../controllers/authController');

const router = express.Router();

//protect all routes after this middleware
router.use(authController.protect);

router
  .route('/')
  .get(companyController.getAllCompany)
  .post(companyController.addCompany);
router
  .route('/:id')
  .get(companyController.getCompany)
  .patch(companyController.updateCompany)
  .delete(companyController.deleteCompany);

module.exports = router;
