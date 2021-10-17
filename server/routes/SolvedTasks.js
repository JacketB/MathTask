const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const router = express.Router();
const controller = require("../controllers/SolvedTasksController");
router.post("/byId/:id", validateToken, controller.AddSolvedTask);

router.get("/byUserId", validateToken, controller.GetSolvedTasks);

module.exports = router;
