const express = require("express");
const app = express();

app.use(express.json());
const db = require("./models");

const taskrouter = require("./routes/Tasks");
app.use("/tasks", taskrouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server start on port 3001");
  });
});
