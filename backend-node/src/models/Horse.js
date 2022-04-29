const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const horseSchema = new Schema({
  horseRaceId: { type: ObjectId, required: true },
  horseName: { type: String, required:  true },
  color: { type: String, required:  true },
  createdAt: { type: Date, default: Date.now }
});

const Horse = model("Horse", horseSchema)

module.exports = Horse