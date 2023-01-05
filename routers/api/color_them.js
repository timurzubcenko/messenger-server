const express = require('express');
const router = express.Router()
const ColorThem = require('../../models/ColorThem')

router.get('/test', (req, res) => res.send('route testing!'));

router.get('/', (req, res) => {
    ColorThem.find()
        .then((color_them) => {
            res.json(color_them)
        })
        .catch((err) => {
            res.status(404).json({ error: "No found" })
        })
})

router.get('/', (req, res) => {
    ColorThem.findOneAndUpdate(req.body)
        .then((res) => {
            let status = false
            res.json(status = !status)
        })
        .catch((err) => {
            res.status(400).json({
                error: "Unable to update this book"
            })
        })
})

module.exports = router