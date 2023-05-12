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

// get a single task
const getSingleTask = async (req, res) => {
    const id = req.params.id
    const singleTask = await Task.findById({"_id": id})
    res.send(singleTask)
}

// delete a task
const deleteATask = async (req, res) => {
    const id = req.params.id
    const deletedTask = await Task.findByIdAndDelete({"_id" : id})

    res.send(deletedTask)
}

// update a task
const updateTask = async (req, res) => {
    const id = req.params.id
    const data = req.body

    // console.log(id)
    // console.log(data)
    const updatedTask = await Task.findByIdAndUpdate({"_id": id}, data)
    res.send('Updated')
}

module.exports = {
  createTask,
  getAllTask,
  getSingleTask,
  deleteATask,
  updateTask
};
