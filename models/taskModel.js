const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    task_data: {
      type: String,
      required: [true, 'A task must have details'],
    },
    completed: {
      type: Boolean,
      default: true,
    },
    list: {
      type: mongoose.Schema.ObjectId,
      ref: 'List',
      required: [true, 'Task must belong to a List'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Task must belong to a User'],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
