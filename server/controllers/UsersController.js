const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
module.exports = {
  getAllUsers: async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json({ listOfUsers: listOfUsers });
  },
  addNewUser: async (req, res) => {
    res.json(req.body);
    const { username, password, email, role } = req.body;
    const found = await Users.findOne({
      where: { username: username, email: email },
    });
    if (!found) {
      bcrypt.hash(password, 10).then((hash) => {
        Users.create({
          username: username,
          email: email,
          password: hash,
          role: role,
        });
        res.json(req.body);
      });
    } else {
      res.json({ error: "User has registered" });
    }
  },
  loginUser: async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) res.json({ error: "User Doesn't Exist" });

    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match)
        res.json({ error: "Wrong Username And Password Combination" });

      const accessToken = sign(
        { username: user.username, id: user.id },
        "importantsecret"
      );
      res.json({
        token: accessToken,
        username: username,
        id: user.id,
        role: user.role,
      });
    });
  },
  getUserInfo: async (req, res) => {
    const id = req.params.id;

    const basicInfo = await Users.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    res.json(basicInfo);
  },
};
