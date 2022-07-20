const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const User = require('../models/userModel');

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
const companies = JSON.parse(
  fs.readFileSync(path.join(__dirname, `companies-data.json`), 'utf-8')
);

//WRITE DATA
const addData = async () => {
  users.forEach((user, i) => {
    user.lists = lists;
    user.company = companies[i]._id;
  });
  try {
    await User.create(users);
    console.log('user data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE DATA
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') addData();
else if (process.argv[2] === '--delete') deleteData();
else console.log(`Can't find what are you looking for`);
