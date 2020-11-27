const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateTokenAuth();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(e);
  }
});
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentails(
      req.body.email,
      req.body.password
    );
    const token = await user.generateTokenAuth();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send("hello");
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
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
    const user = await User.findById(req.params.id);
    updates.forEach((update) => (user[update] = req.body[update]));
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
