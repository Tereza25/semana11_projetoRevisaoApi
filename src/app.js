const express = require("express")
const app = express()

const index = require("./routes/index")
const music = require("./routes/musicRoute")

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Acces-Control-Allow-Origin","*")
    res.header(
        "Acess-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/music", music)

module.exports = app