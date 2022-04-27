const { Schema, model } = require('mongoose')

const horseRaceSchema = new Schema({
  horseracename: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const HorseRace = model("HorseRace", horseRaceSchema)

module.exports = HorseRace