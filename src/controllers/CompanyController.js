const Controller = require("./Controller.js")
const CompanyServices = require("../services/CompanyServices.js")

const companyServices = new CompanyServices()

class CompanyController extends Controller {
    constructor () {
        super(companyServices)
    }
}

module.exports = CompanyController