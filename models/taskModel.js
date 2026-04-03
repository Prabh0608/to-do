const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A task should have a title!"],
    trim: true,
    validate: {
      validator: function (v) {
        return v && v.trim().length > 0;
      },
      message: "Task title cannot be empty!",
    },
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
