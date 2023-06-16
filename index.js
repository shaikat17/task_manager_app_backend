const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();

const connectDB = require("./config/connectDB.js");
const Task = require("./models/taskModel.js");
const routes = require("./routes/routes.js");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);
// app.use(routes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

connectDB();

app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});
