const { Router } = require("express")
const UserController = require("../controllers/UserController.js")

const userController = new UserController()

const router = Router()

router.get("/users", (req, res) => userController.getAll(req, res))
router.get("/users/:id", (req, res) => userController.getById(req, res))
router.post("/users", (req, res) => userController.createNewRegister(req, res))
router.put("/users/:id", (req, res) => userController.updateInfo(req, res))
router.delete("/users/:id", (req, res) => userController.deleteInfo(req, res))

module.exports = router