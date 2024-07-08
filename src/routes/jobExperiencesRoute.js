const { Router } = require("express")
const JobExperienceController = require("../controllers/JobExperienceController.js")

const jobExperienceController = new JobExperienceController()

const router = Router()

router.get("/jobExperiences", (req, res) => jobExperienceController.getAll(req, res))
router.get("/jobExperiences/:id", (req, res) => jobExperienceController.getById(req, res))
router.post("/jobExperiences", (req, res) => jobExperienceController.createNewRegister(req, res))
router.put("/jobExperiences/:id", (req, res) => jobExperienceController.updateInfo(req, res))
router.delete("/jobExperiences/:id", (req, res) => jobExperienceController.deleteInfo(req, res))

module.exports = router