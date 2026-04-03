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
      message: "error",
      error: err,
    });
  }
};

exports.getAllTask = async (req, res, next) => {
  try {
    const task = await Task.find({});
    res.status(200).json({
      message: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err,
    });
  }
};
