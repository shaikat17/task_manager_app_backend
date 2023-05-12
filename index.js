const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb")
const app = express();

const connectDB = require('./config/connectDB.js');
const Task = require("./model/taskModel.js");

const port = process.env.PORT || 3000

app.use(express.json())


connectDB()

app.get("/", (req, res) => {
  res.send("hello");
});

app.post('/api/tasks' , async (req, res) => {
  const data = req.body
  const result = await Task.create(data)
  res.send(result)
})


app.listen(port, () => {
    console.log(`Server starting on port ${port}`)
})