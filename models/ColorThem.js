const mongoose = require('mongoose')

const darkModeOnSchema = new mongoose.Schema({
    darkMode: {
        type: Boolean,
    },
})

module.exports = darkModeOn = mongoose.model('darkModeOn', darkModeOnSchema)