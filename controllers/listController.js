const List = require('../models/listModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllList = async (req, res) => {
  const allList = await List.find();
  res.status(200).json({
    status: 'success',
    length: allList.length,
    data: { Lists: allList },
  });
};

exports.getList = catchAsync(async (req, res, next) => {
  const doc = await List.findById(req.params.id);
  if (!doc) return next(new AppError('No List found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.addList = catchAsync(async (req, res, next) => {
  const doc = await List.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { data: doc },
  });
});

exports.deleteList = catchAsync(async (req, res, next) => {
  const doc = await List.findByIdAndDelete(req.params.id);
  if (!doc) return next(new AppError('No List found with that ID', 404));

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateList = catchAsync(async (req, res, next) => {
  const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedList)
    return next(new AppError('No List found with that ID', 404));
  res.status(200).json({
    status: 'success',
    data: { updatedList },
  });
});
