const Horse = require('../models/Horse')

exports.getHorses = async (req, res) => {
  const horses = await Horse.find({})
  
  res.status(200).send(horses)
}

exports.createHorse = async (req, res) => {

    const {horseRaceId, horseName, color} = req.body;

  const newHorse = {
    horseRaceId,
    horseName,
    color
  }

  const createdHorse = new Horse(newHorse)

  const savedHorse = await createdHorse.save()

  res.status(200).send(`yay ${savedHorse._id}`)
}

exports.updateHorse = async (req, res) => {
  const { id } = req.params;

  const horse = await Horse.findOneAndUpdate({ _id: id }, req.body)

  if (!horse) res.status(404).send("No horse with that id found")

  const updatedHorse = await Horse.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following horse: \n ${updatedHorse}`)
}

exports.deleteHorse = async (req, res) => {
  const { id } = req.params;

  const horse = await Horse.findOneAndDelete({ _id: id })

  if (!horse) res.status(404).send("No horse with that id found")
  console.log(horse)

  res.status(200).send(`Successfully deleted the following horse: \n ${horse}`)
}