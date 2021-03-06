const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
app.use(require('../routes/users'))

const config = require('../config/config')

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        app.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))

app.get('/users', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})
