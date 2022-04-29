const router = require("express").Router()
const horseController = require("../controllers/horse")

router.get("/", horseController.getHorses)
router.post("/create", horseController.createHorse)
router.put("/update/:id", horseController.updateHorse)
router.delete("/delete/:id", horseController.deleteHorse)

module.exports = router