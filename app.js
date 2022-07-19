const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");

const app = express();

//  MIDDLEWARE
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/users", userRouter);

//  START SERVER
module.exports = app;
