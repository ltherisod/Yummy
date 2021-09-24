const express= require('express')
const database = require('./config/database')
const router = require('./routes/index')
const Sequelize = require('sequelize')
 const session = require('express-session')
const User = require('./models/User')
const Recipe = require('./models/Recipe')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
require('dotenv').config()

const app =express()
require('./config/database')


app.use(express.static('public'))
app.set('view engine', 'ejs') //busca las vistas en views directamente y archivos ejs
app.use(express.urlencoded({extended:true})) //middleware

Recipe.belongsTo(User)
User.hasMany(Recipe)

const myStore = new SequelizeStore({
    db: database,
  })

  app.use(
    session({
      secret: process.env.PHRASE,
      store: myStore,
      resave: false,
      saveUninitialized:false,
      proxy:true,
    })
  )
  
  myStore.sync()
  
const urlControllers = require('./controllers/urlControllers')





database.sync()
.then(()=>{
    app.use('/', urlControllers.checkURL, router)
    app.listen(4000)
})