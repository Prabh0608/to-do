const Task = require("../models/taskModel");

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({
      message: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to Create Task",
      error: err.message,
    });
  }
};

exports.getAllTask = async (req, res, next) => {
  try {
    const task = await Task.find({});
    res.status(200).json({
      message: "success",
      count: task.length,
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to retrieve tasks",
      error: err.message,
    });
  }
};

exports.updateTask = async (req, res, next) => {
  const doc = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!doc) {
    res.status(400).json({
      message: "No task found with that id",
      error: err.message,
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};
