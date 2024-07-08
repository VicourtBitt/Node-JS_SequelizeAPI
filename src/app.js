const express = require('express');
const routes = require("./routes")

const appAPI = express();

routes(appAPI)

module.exports = appAPI;