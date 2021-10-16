const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

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

const ratingRouter = require("./routes/Ratings");
app.use("/rate", ratingRouter);

const solvedRouter = require("./routes/SolvedTasks");
app.use("/solved", solvedRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("Server start on port 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
