const { mongoURI } = require('./config/keys')
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect(mongoURI)

require('./models/User')
require('./services/passport')

const app = express()
require('./routes/auth')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)