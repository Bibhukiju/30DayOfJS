require("./db/mongoose");
const express = require("express");
const taskRouter = require("./routers/task_routes");
const userRouter = require("./routers/user_routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("hello  " + port);
});
