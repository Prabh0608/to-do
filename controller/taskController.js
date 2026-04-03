const Task = require("../models/taskModel");

exports.createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim().length === 0) {
      return res.status(400).json({
        message: "Validation Error",
        error: "Task title cannot be empty!",
      });
    }

    const task = await Task.create({ title, description });
    res.status(201).json({
      message: "success",
      data: { task },
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
      data: { task },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to retrieve tasks",
      error: err.message,
    });
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    if (req.body.title !== undefined && req.body.title.trim().length === 0) {
      return res.status(400).json({
        message: "Validation Error",
        error: "Task title cannot be empty!",
      });
    }

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        message: "No task found with that id",
      });
    }

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to update task",
      error: err.message,
    });
  }
};

exports.markComplete = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "No task found with that id",
      });
    }

    if (task.status === true) {
      return res.status(400).json({
        message: "Validation Error",
        error: "Task is already marked as completed!",
      });
    }

    task.status = true;
    await task.save();

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to mark task as complete",
      error: err.message,
    });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "No task found with that ID",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to delete task",
      error: err.message,
    });
  }
};
