const router = require("express").Router()
const horseRaceController = require("../controllers/horseRace")

router.get("/", horseRaceController.getHorseRaces)
router.post("/create", horseRaceController.createHorseRace)
router.put("/update/:id", horseRaceController.updateHorseRace)
router.delete("/delete/:id", horseRaceController.deleteHorseRace)

module.exports = router