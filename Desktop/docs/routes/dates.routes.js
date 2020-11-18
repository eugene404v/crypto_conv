const { Router } = require("express");
const config = require("config");
const Dates = require("../models/Dates");
const auth = require("../middleware/auth.middleware");
const shortid = require('shortid')
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
    const { day, title } = req.body;
    const dayId = shortid.generate()
    const newDate = new Dates({
      title,
      day,
      dayId,
      daySec: Date.parse(day),
      owner: req.user.userId,
    });

    await newDate.save();
    const dates = await Dates.find({ owner: req.user.userId });
    res.status(200).json(dates);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.post("/remove", auth, async (req, res) => {
  try {
    const {dayId} = req.body

    const existing = await Dates.findOne({ dayId });

    if (existing) {
      Dates.find({ dayId }).remove().exec();
    }
    const dates = await Dates.find({ owner: req.user.userId });
    res.status(200).json(dates);
  } catch(e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
})

router.post("/removeall", auth, async (req, res) => {
  try {
    await Dates.deleteMany({ owner: req.user.userId });
    const dates = await Dates.find({ owner: req.user.userId });
    res.status(200).json(dates);
  } catch(e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
})

module.exports = router;

