const express = require("express")
const route = express.Router()
const UserController = require("../Controller/User")

module.exports = route.post("/register",UserController.register)