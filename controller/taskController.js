const Task = require("../models/taskModel");

exports.createTask = async (req, res, next) => {
  console.log(req.body);
  try {
    const task = await Task.create(req.body);
    res.status(200).json({
      message: "success",
      task,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err,
    });
  }
};
