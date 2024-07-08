const { Router } = require("express")
const SkillControler = require("../controllers/SkillControler.js")

const skillController = new SkillControler()

const router = Router()

router.get("/skills", (req, res) => skillController.getAll(req, res))
router.get("/skills/:id", (req, res) => skillController.getById(req, res))
router.post("/skills", (req, res) => skillController.createNewRegister(req, res))
router.put("/skills/:id", (req, res) => skillController.updateInfo(req, res))
router.delete("/skills/:id", (req, res) => skillController.deleteInfo(req, res))

module.exports = router