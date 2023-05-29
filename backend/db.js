const { default: mongoose } = require('mongoose')
const mognoose = require('mongoose')
require('dotenv').config()


mognoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection