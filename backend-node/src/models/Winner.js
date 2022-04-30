const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const winnerSchema = new Schema({
  raceId: { type: ObjectId, required: true },
  horseId: { type: ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Winner = model("Winner", winnerSchema)

module.exports = Winner