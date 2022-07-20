const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A company must have a name'],
    trim: true,
    unique: true,
    lowercase: true,
  },
  owner: {
    type: String,
    required: [true, 'A company must have an owner name'],
  },
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
