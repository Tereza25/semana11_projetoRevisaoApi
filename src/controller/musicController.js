const music = require("../models/music.json")

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(music)
}

module.exports = {
    getAll,
}