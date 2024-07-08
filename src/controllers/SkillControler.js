const Controller = require("./Controller.js")
const SkillServices = require("../services/SkillServices.js")

const skillServices = new SkillServices()

class SkillController extends Controller {
    constructor () {
        super(skillServices)
    }
}

module.exports = SkillController