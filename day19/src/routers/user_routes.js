const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(e);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
});
router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send;
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowdedUpdates = ["name", "email", "password", "age"];
  const isvalidOperation = updates.every((update) =>
    allowdedUpdates.includes(update)
  );

  if (!isvalidOperation) {
    return res.status(400).send({
      err: "invalid Updates",
    });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send("Mango");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send("test");
  }
});
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
