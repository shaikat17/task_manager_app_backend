const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const connectDB = require("./config/connectDB.js");
const Task = require("./models/taskModel.js");
const routes = require("./routes/routes.js");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

connectDB();

app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});
