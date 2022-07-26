const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const listRouter = require('./routes/listRoutes');
const companyRouter = require('./routes/companyRoutes');
const taskRouter = require('./routes/taskRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

//  MIDDLEWARE
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/lists', listRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/companies', companyRouter);

app.all('*', (req, res, next) => {
  next(new Error(`can't find ${req.originalUrl} on this server`));
});

// In this middelware all the thrown Error are handeld
app.use(globalErrorHandler);

//  START SERVER
module.exports = app;
