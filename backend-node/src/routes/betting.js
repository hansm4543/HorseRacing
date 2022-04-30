const router = require("express").Router()
const bettingController = require("../controllers/betting")

router.get("/", bettingController.getBettings)
router.post("/hasBetted", bettingController.getBetting)
router.post("/create", bettingController.createBetting)
router.put("/update/:id", bettingController.updateBetting)
router.delete("/delete/:id", bettingController.deleteBetting)

module.exports = router