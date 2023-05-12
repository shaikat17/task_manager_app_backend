const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/task-manager";

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
