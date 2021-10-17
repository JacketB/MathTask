const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsersController");

router.get("/list", controller.getAllUsers);

router.post("/", controller.addNewUser);

router.post("/login", controller.loginUser);

router.get("/basicinfo/:id", controller.getUserInfo);

module.exports = router;
