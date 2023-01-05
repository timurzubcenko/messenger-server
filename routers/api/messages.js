const express = require('express');
const router = express.Router()
const Message = require('../../models/Message')

router.get('/test', (req, res) => res.send('book route testing!'));

router.get('/', (req, res) => {
    Message.find()
        .sort({ date: -1 })
        .then((messages) => {
            res.json(messages)
        })
        .catch((err) => {
            res.status(404).json({ error: "No boooks found" })
        })
})

router.post('/', (req, res) => {
    console.log(req.body)
    Message.create(req.body)
        .then((message) => {
            res.json(message)
        })
        .catch((err) => {
            res.status(400).json({
                error: "Unable to add this book"
            })
        })
})

router.delete('/:id', (req, res) => {
    Message.findByIdAndDelete(req.params.id)
        .then((message) => {
            res.json({ msg: "Message delete" })
        })
        .catch((err) => {
            res.status(400).json({
                error: "Unable to delete this book"
            })
        })
})


module.exports = router