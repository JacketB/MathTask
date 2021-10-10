const express = require("express");
const router = express.Router();
const { Images } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewares");

router.post("/", validateToken, async (req, res) => {
  const image = req.body;
  await Images.create(image);
  res.json(image);
});
module.exports = router;
