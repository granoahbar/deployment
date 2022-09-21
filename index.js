const express = require('express')
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())