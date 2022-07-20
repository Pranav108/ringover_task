const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Task = require('../models/taskModel');

dotenv.config({ path: path.resolve(__dirname, '../config.env') });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'));

//READ JSON FILE

const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, `users-data.json`), 'utf-8')
);
const lists = JSON.parse(
  fs.readFileSync(path.join(__dirname, `lists-data.json`), 'utf-8')
);
const tasks = JSON.parse(
  fs.readFileSync(path.join(__dirname, `tasks-data.json`), 'utf-8')
);

//WRITE DATA
const addData = async () => {
  const todo = [];
  let i = 0,
    len = tasks.length;
  users.forEach((user) => {
    lists.forEach((list) => {
      const task = tasks[i++ % len];
      todo.push({
        task_data: task['todo'],
        completed: task['completed'],
        user: user['_id'],
        list: list['_id'],
      });
    });
  });
  try {
    await Task.create(todo);
    console.log('Tasks data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE DATA
const deleteData = async () => {
  try {
    await Task.deleteMany();
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') addData();
else if (process.argv[2] === '--delete') deleteData();
else console.log(`Can't find what are you looking for`);
