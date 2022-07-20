const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A list must have details'],
    trim: true,
    unique: true,
  },
  details: String,
  activeStatus: {
    type: String,
    enum: {
      values: ['play', 'pause'],
      message: 'activeStatus is either: play or pause',
    },
    default: 'play',
  },
});

// listSchema.pre(/^find/, function (next) {
//   this.find({ activeStatus: 'play' });
//   next();
// });

const List = mongoose.model('List', listSchema);
module.exports = List;
