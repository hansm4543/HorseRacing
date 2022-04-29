const Betting = require('../models/Betting')

exports.getBettings = async (req, res) => {
  const bettings = await Betting.find({})
  
  res.status(200).send(bettings)
}

exports.createBetting = async (req, res) => {

    const {horseId, userEmail} = req.body;

  const newBetting = {
    horseId,
    userEmail
  }

  const createdBetting = new Betting(newBetting)

  const savedBetting = await createdBetting.save()

  res.status(200).send(`yay ${savedBetting._id}`)
}

exports.updateBetting = async (req, res) => {
  const { id } = req.params;

  const horse = await Betting.findOneAndUpdate({ _id: id }, req.body)

  if (!horse) res.status(404).send("No horse with that id found")

  const updatedBetting = await Betting.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following horse: \n ${updatedBetting}`)
}

exports.deleteBetting = async (req, res) => {
  const { id } = req.params;

  const horse = await Betting.findOneAndDelete({ _id: id })

  if (!horse) res.status(404).send("No horse with that id found")
  console.log(horse)

  res.status(200).send(`Successfully deleted the following horse: \n ${horse}`)
}