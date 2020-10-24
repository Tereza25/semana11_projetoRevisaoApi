const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicController")

router.get("/", controller.getAllMusic)

module.exports = router