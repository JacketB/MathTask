const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");
const controller = require("../controllers/CommentsController");

router.get("/:taskId", controller.GetComments);

router.post("/", validateToken, controller.AddComment);

module.exports = router;
