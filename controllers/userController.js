const User = require('../models/userModel');
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
  if (!doc) return next(new Error('No User found with that ID'));
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
