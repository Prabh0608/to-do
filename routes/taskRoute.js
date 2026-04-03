const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router
  .route("/")
  .post(taskController.createTask)
  .get(taskController.getAllTask);

router
  .route("/:id")
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
