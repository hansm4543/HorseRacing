const HorseRace = require('../models/HorseRace')

exports.getHorseRaces = async (req, res) => {
  const horseRaces = await HorseRace.find({})
  
  res.status(200).send(horseRaces)
}

exports.createHorseRace = async (req, res) => {

    const {horseracename, place, date, status} = req.body;

  const newHorseRace = {
    horseracename,
    place,
    date,
    status
  }

  const createdHorseRace = new HorseRace(newHorseRace)

  const savedHorseRace = await createdHorseRace.save()

  res.status(200).send(`yay ${savedHorseRace._id}`)
}

exports.updateHorseRace = async (req, res) => {
  const { id } = req.params;

  const horseRace = await HorseRace.findOneAndUpdate({ _id: id }, req.body)

  if (!horseRace) res.status(404).send("No item with that id found")

  const updatedHorseRace = await HorseRace.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following item: \n ${updatedHorseRace}`)
}

exports.deleteHorseRace = async (req, res) => {
  const { id } = req.params;

  const horseRace = await HorseRace.findOneAndDelete({ _id: id })

  if (!horseRace) res.status(404).send("No post with that id found")
  console.log(horseRace)

  res.status(200).send(`Successfully deleted the following post: \n ${horseRace}`)
}