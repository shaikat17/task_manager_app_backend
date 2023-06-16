require('dotenv').config()
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.l30hzpi.mongodb.net/?retryWrites=true&w=majority/task-manager`;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(uri);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
