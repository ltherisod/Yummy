const express= require('express')
const router = require('./routes/index')
const session = require('express-session')
const mongo = require('connect-mongodb-session')(session)
const app =express()
require('dotenv').config()
const myStore = new mongo({
    uri: process.env.MONGODATABASE,
    collection: 'sessions'
})
require('./config/database')


app.use(express.static('public'))
app.set('view engine', 'ejs') //busca las vistas en views directamente y archivos ejs
app.use(express.urlencoded({extended:true})) //middleware
app.use(session({
    secret:process.env.PHRASE,
    resave:false,
    saveUninitialized:false,
    store: myStore
}))

const urlControllers = require('./controllers/urlControllers')
app.use('/', urlControllers.checkURL, router)



app.listen(4000, ()=> console.log("Server running"))