const Task = require("../models/taskModel");

// create task
const createTask = async (req, res) => {
  const data = req.body;
  const result = await Task.create(data);
  res.send(result);
};

//   get all task
const getAllTask = async (req, res) => {
  const tasks = await Task.find({});
  res.send(tasks);
};

module.exports = {
  createTask,
  getAllTask,
};
