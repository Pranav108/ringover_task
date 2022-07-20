const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = async (req, res) => {
  const allUser = await User.find();
  res.status(200).json({
    status: 'success',
    length: allUser.length,
    data: { users: allUser },
  });
};

exports.getUsers = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);
  if (!doc) return next(new AppError('No User found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.addUsers = catchAsync(async (req, res, next) => {
  const doc = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);
  if (!doc) return next(new AppError('No User found with that ID', 404));

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedUser)
    return next(new AppError('No User found with that ID', 404));

  res.status(200).json({
    status: 'success',
    data: { updatedUser },
  });
});
