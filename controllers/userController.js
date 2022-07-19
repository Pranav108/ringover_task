const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  const allUser = await User.find();
  res.status(200).json({
    status: "success",
    length: allUser.length,
    data: { users: allUser },
  });
};
exports.getUsers = (req, res) => {
  res.status(200).json({
    status: "error",
    message: "This router is yet to implement",
  });
};
exports.addUsers = (req, res) => {
  res.status(200).json({
    status: "error",
    message: "This router is yet to implement",
  });
};
