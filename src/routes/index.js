const express = require("express")
const companies = require("./companiesRoute.js")
const skills = require("./skillsRoute.js")
const users = require('./usersRoute.js')
const jobExperiences = require('./jobExperiencesRoute.js')
const cors = require("cors")
const corsConfig = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

module.exports = appAPI => {
    appAPI.use(
        express.json(),
        cors(corsConfig),
        companies,
        skills,
        users,
        jobExperiences
    )
}