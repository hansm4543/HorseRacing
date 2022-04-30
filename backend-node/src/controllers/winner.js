const Winner = require('../models/Winner')

exports.getWinners = async (req, res) => {
  const winners = await Winner.find({})
  
  res.status(200).send(winners)
}
exports.getWinner = async (req, res) => {
    const { raceId} = req.params;

    const winner = await Winner.find(req.body)
    if (!winner){ 
        res.status(404).send(`No`)
    }
    res.status(200).send(winner)
}

exports.createWinner = async (req, res) => {

    const {raceId, horseId} = req.body;

  const newWinner = {
    raceId,
    horseId
  }

  const createdWinner = new Winner(newWinner)

  const savedWinner = await createdWinner.save()

  res.status(200).send(`yay ${savedWinner._id}`)
}

exports.updateWinner = async (req, res) => {
  const { id } = req.params;

  const winner = await Winner.findOneAndUpdate({ _id: id }, req.body)

  if (!winner) res.status(404).send("No winner with that id found")

  const updatedWinner = await Winner.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following winner: \n ${updatedWinner}`)
}

exports.deleteWinner = async (req, res) => {
  const { id } = req.params;

  const winner = await Winner.findOneAndDelete({ _id: id })

  if (!winner) res.status(404).send("No winner with that id found")
  console.log(winner)

  res.status(200).send(`Successfully deleted the following winner: \n ${winner}`)
}