const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router
  .route("/")
  .post(taskController.createTask)
  .get(taskController.getAllTask);
module.exports = router;
