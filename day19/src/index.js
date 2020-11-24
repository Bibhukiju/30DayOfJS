const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user_routes");
const taskRouter = require("./routers/task_routes");
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("hello  " + port);
});
