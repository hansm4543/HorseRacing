const Betting = require('../models/Betting')

exports.getBettings = async (req, res) => {
  const bettings = await Betting.find({})
  
  res.status(200).send(bettings)
}
exports.getBetting = async (req, res) => {
    const { raceId,  userEmail} = req.params;

    const bet = await Betting.find(req.body)
    if (!bet){ 
        res.status(404).send(`No`)
    }
    res.status(200).send(bet)
}

exports.createBetting = async (req, res) => {

    const {raceId, horseId, userEmail} = req.body;

  const newBetting = {
    raceId,
    horseId,
    userEmail
  }

  const createdBetting = new Betting(newBetting)

  const savedBetting = await createdBetting.save()

  res.status(200).send(`yay ${savedBetting._id}`)
}

exports.updateBetting = async (req, res) => {
  const { id } = req.params;

  const bet = await Betting.findOneAndUpdate({ _id: id }, req.body)

  if (!bet) res.status(404).send("No bet with that id found")

  const updatedBetting = await Betting.findOne({ _id: id })

  res.status(200).send(`Successfully updated the following bet: \n ${updatedBetting}`)
}

exports.deleteBetting = async (req, res) => {
  const { id } = req.params;

  const bet = await Betting.findOneAndDelete({ _id: id })

  if (!bet) res.status(404).send("No bet with that id found")
  console.log(bet)

  res.status(200).send(`Successfully deleted the following bet: \n ${bet}`)
}