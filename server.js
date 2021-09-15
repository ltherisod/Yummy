const express= require('express')
const router = require('./routes/index')
const app =express()
require('dotenv').config()
require('./config/database')


app.use(express.static('public'))

app.use('/', router)

app.listen(4000, ()=> console.log("Server running"))