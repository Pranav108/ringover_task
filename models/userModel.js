const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'A user must have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    minlength: [8, 'Please provide a password with at least 8 characters'],
    select: false,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
    required: [true, 'User must belong to a Company'],
  },
  lists: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'List',
    },
  ],
});

userSchema.pre('save', async function (next) {
  //Only run this function if password is actually modified
  if (!this.isModified('password')) return next();

  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.varifyPassword = async function (candidatePassword) {
  // here this.password is accissible because we have selected 'password' for our current user
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.isPasswordChangedLater = async function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const lastPasswordChanged = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // console.log(lastPasswordChanged, JWTTimeStamp);
    return lastPasswordChanged > JWTTimeStamp;
  }

  //FALSE means password not changed
  return false;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
