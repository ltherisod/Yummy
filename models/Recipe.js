const Sequelize = require('sequelize')
const database = require('../config/database')

const Recipe = database.define( 'recipe',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{type:Sequelize.STRING, allowNull:false},
    description:{type:Sequelize.STRING, allowNull:false},
    time: {type:Sequelize.INTEGER, allowNull:false},
    servings:{type:Sequelize.INTEGER, allowNull:false},
    ingredients:{type:Sequelize.STRING, allowNull:false},
    type:{type:Sequelize.STRING, allowNull:false},
    photo:{type:Sequelize.STRING, allowNull:false}
})


module.exports=Recipe