const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A task should have a title!"],
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    required: [true, "A task should have a status!"],
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
