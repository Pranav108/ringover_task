const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

router.route("/").get(userController.getAllUsers).post(userController.addUsers);

router.route("/:id").get(userController.getUsers);

module.exports = router;
