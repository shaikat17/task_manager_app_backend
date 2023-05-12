const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getAllTask, getSingleTask, deleteATask, updateTask } = require("../controllers/taskController");

const router = express.Router();

router.route('/tasks').get(getAllTask).post(createTask)
router.route('/task/:id').get(getSingleTask).delete(deleteATask).put(updateTask)

// create a new task
// router.post("/tasks", createTask);

// get all task data
// router.get("/tasks", getAllTask);

// get a single task
// router.get('/task/:id', getSingleTask)

// delete a task
// router.delete('/task/:id', deleteATask)

// update a task
// router.put('/task/:id', updateTask)

module.exports = router;
