const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getAllTask, getSingleTask } = require("../controllers/taskController");

const router = express.Router();

// create a new task
router.post("/api/tasks", createTask);

// get all task data
router.get("/api/tasks", getAllTask);

// get a single task
router.get('/api/task/:id', getSingleTask)

module.exports = router;
