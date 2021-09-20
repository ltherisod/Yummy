const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {type:String},
    lastname: {type:String},
    email:{type:String},
    password:{type:String}
})

const User = mongoose.model('user',userSchema)

module.exports=User