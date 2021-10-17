const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");
const controller = require("../controllers/TasksController");

router.get("/", controller.GetAllTasks);

router.get("/byId/:id", controller.GetOneTask);

router.get("/byuserId/:id", controller.GetAllUserTasks);

router.post("/", validateToken, controller.CreateTask);

router.put("/average/:id/:av", controller.UpdateTaskRating);

router.put("/updated", validateToken, controller.UpdateTaskData);

router.delete("/:id", validateToken, controller.DeleteTask);

module.exports = router;
