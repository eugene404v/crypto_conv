const { Router } = require("express");
const config = require("config");
const Dates = require("../models/Dates");
const auth = require("../middleware/auth.middleware");
const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const dates = await Dates.find({ owner: req.user.userId });
    res.status(200).json(dates);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { date, title } = req.body;

    const date = new Dates({
      title,
      date,
      owner: req.user.userId,
    });

    await date.save();
    const dates = await Dates.find({ owner: req.user.userId });
    res.status(200).json(dates);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});
