const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const db = require("./models");

const taskrouter = require("./routes/Tasks");
app.use("/tasks", taskrouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const usersListRouter = require("./routes/Users");
app.use("/list", usersListRouter);
const imagesRouter = require("./routes/Images");
app.use("/images", imagesRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server start on port 3001");
  });
});
