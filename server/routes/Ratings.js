const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const router = express.Router();
const controller = require("../controllers/RatingController");

router.post("/byId/:id/grade/:gr", validateToken, controller.AddRate);

router.get("/:taskid", controller.GetRating);

module.exports = router;
