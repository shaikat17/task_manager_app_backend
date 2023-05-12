const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getAllTask } = require("../controllers/taskController");

const router = express.Router();

// create a new task
router.post("/api/tasks", createTask);

// get all task data
router.get("/api/tasks", getAllTask);

module.exports = router;
