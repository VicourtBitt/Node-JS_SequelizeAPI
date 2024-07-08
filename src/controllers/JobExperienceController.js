const Controller = require("./Controller.js")
const JobExperienceServices = require("../services/JobExperienceServices.js")

const jobExperienceServices = new JobExperienceServices()

class JobExperienceController extends Controller {
    constructor () {
        super(jobExperienceServices)
    }
}

module.exports = JobExperienceController