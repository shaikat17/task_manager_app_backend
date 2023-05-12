const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getAllTask, getSingleTask, deleteATask } = require("../controllers/taskController");

const router = express.Router();

// create a new task
router.post("/api/tasks", createTask);

// get all task data
router.get("/api/tasks", getAllTask);

// get a single task
router.get('/api/task/:id', getSingleTask)

// delete a task
router.delete('/api/task/:id', deleteATask)

module.exports = router;
