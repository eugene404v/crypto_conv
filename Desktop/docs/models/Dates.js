const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  day: { type: Date, required: true },
  daySec: { type: Number, required: true },
  dayId: { type: String, required: true, unique: true},
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Dates", schema);