const express = require("express");
const taskRoute = require("./routes/taskRoute");
const app = express();

app.use(express.json());
app.use("/api/v1/task", taskRoute);

module.exports = app;
