const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const bettingSchema = new Schema({
  horseId: { type: ObjectId, required: true },
  userEmail: { type: String, required: true },
  amount: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now }
});

const Betting = model("Betting", bettingSchema)

module.exports = Betting