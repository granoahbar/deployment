const express = require('express')
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 4000

const app = express()

app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ad87b928e26e4c658a583b40d3243c0f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

try {
  nonExistentFunction();
} catch (error) {
  rollbar.error('Error');
}

app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })

  app.use(express.static(path.join(__dirname, '../client')))

app.listen(port, () => {
    console.log('Docked at port ' + port)
  })


