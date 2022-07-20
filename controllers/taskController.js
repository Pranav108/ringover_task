const Task = require('../models/taskModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllTask = async (req, res) => {
  const allTask = await Task.find();
  res.status(200).json({
    status: 'success',
    length: allTask.length,
    data: { Tasks: allTask },
  });
};

exports.getTask = catchAsync(async (req, res, next) => {
  const doc = await Task.findById(req.params.id);
  if (!doc) return next(new AppError('No Task found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.addTask = catchAsync(async (req, res, next) => {
  const doc = await Task.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const doc = await Task.findByIdAndDelete(req.params.id);
  if (!doc) return next(new AppError('No Task found with that ID', 404));

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask)
    return next(new AppError('No Task found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { updatedTask },
  });
});
