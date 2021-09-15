const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODATABASE)
.then(() => console.log("Database connected"))
.catch(error => console.log(error))