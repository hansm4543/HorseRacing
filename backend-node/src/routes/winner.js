const router = require("express").Router()
const winnerController = require("../controllers/winner")

router.get("/", winnerController.getWinners)
router.post("/isWinner", winnerController.getWinner)
router.post("/create", winnerController.createWinner)
router.put("/update/:id", winnerController.updateWinner)
router.delete("/delete/:id", winnerController.deleteWinner)

module.exports = router