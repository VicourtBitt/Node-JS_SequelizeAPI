const { Router } = require("express")
const CompanyController = require("../controllers/CompanyController.js")

const companyController = new CompanyController()

const router = Router()

router.get("/companies", (req, res) => companyController.getAll(req, res))
router.get("/companies/:id", (req, res) => companyController.getById(req, res))
router.post("/companies", (req, res) => companyController.createNewRegister(req, res))
router.put("/companies/:id", (req, res) => companyController.updateInfo(req, res))
router.delete("/companies/:id", (req, res) => companyController.deleteInfo(req, res))

module.exports = router