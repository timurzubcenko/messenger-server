const express = require('express')
const connectDB = require('./config/db.js')
const cors = require('cors')

const app = express();
connectDB()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }))

const messages = require('./routers/api/messages')
app.use('/api/messages', messages)
const color_them = require('./routers/api/color_them')
app.use('/api/color_them', color_them)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('listening on port' + PORT)
})