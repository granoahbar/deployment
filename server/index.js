const express = require('express')
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 4000

const app = express()

app.use(express.json())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'dca1053ba69340078672cd065421849e',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
rollbar.log('Cool Beans!')

app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })

  app.use(express.static(path.join(__dirname, '../client')))

app.listen(port, () => {
    console.log('Docked at port ' + port)
  })
