const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');

const app = express();

//  MIDDLEWARE
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new Error(`can't find ${req.originalUrl} on this server`));
});

// In this middelware all the thrown Error are handeld
app.use((err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
});

//  START SERVER
module.exports = app;
