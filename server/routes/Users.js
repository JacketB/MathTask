const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsersController");

router.get("/list", controller.getAllUsers);

router.post("/", controller.addNewUser);

router.post("/login", controller.loginUser);

router.get("/basicinfo/:id", controller.getUserInfo);

router.put("/byId", controller.updateUserData);

router.put("/roleById", controller.updateUserRole);

router.delete("/delete/:id", controller.deleteUser);

module.exports = router;
