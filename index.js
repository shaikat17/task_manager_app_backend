const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb")
const app = express();

const connectDB = require('./config/connectDB.js')

const port = process.env.PORT || 3000



connectDB()

app.get("/", (req, res) => {
  res.send("hello");
});


app.listen(port, () => {
    console.log(`Server starting on port ${port}`)
})