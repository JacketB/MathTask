const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bc = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bc.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("user created");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) res.json({ error: "user not found" });
  bc.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "wrong username or password" });
    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.json(accessToken);
  });
});
module.exports = router;
