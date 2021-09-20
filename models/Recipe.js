const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {type:String},
    description:{type:String},
    time: {type:Number},
    servings: {type:Number},
    ingredients:{type:Array},
    type: {type:String},
    photo:{type:String},
    userId:{type:mongoose.Types.ObjectId, ref:'user'}
})

const Recipe = mongoose.model('recipe',recipeSchema)

module.exports=Recipe