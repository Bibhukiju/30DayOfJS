const express = require("express");
const router = new express.Router();
const Task = require("../models/task");

//create Task
router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send();
  }
});

//read Task
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

//update task
router.patch("/tasks/:id", async (req, res) => {
  updates = Object.keys(req.body);
  validUpdates = ["desc", "isCompleted"];
  const isvalidOperation = updates.every((update) =>
    validUpdates.includes(update)
  );

  if (!isvalidOperation) {
    return res.status(400).send({
      err: "invalid Updates",
    });
  }

  try {
    const task = await Task.findById(req.params.id);
    updates.forEach((element) => (task[element] = req.body[element]));
    await task.save();
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.send(400);
  }
});

//delete task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
