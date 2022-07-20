const Company = require('../models/companyModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllCompany = async (req, res) => {
  const allCompany = await Company.find();
  res.status(200).json({
    status: 'success',
    length: allCompany.length,
    data: { Companys: allCompany },
  });
};

exports.getCompany = catchAsync(async (req, res, next) => {
  const doc = await Company.findById(req.params.id);
  if (!doc) return next(new AppError('No Company found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.addCompany = catchAsync(async (req, res, next) => {
  const doc = await Company.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.deleteCompany = catchAsync(async (req, res, next) => {
  const doc = await Company.findByIdAndDelete(req.params.id);
  if (!doc) return next(new AppError('No Company found with that ID', 404));

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateCompany = catchAsync(async (req, res, next) => {
  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedCompany)
    return next(new AppError('No Company found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { updatedCompany },
  });
});
