const Sequelize = require('sequelize')
const database = require('../config/database')

const User = database.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    firstname:{type:Sequelize.STRING, allowNull:false},
    lastname:{type:Sequelize.STRING, allowNull:false},
    email: {type:Sequelize.STRING, allowNull:false},
    password:{type:Sequelize.STRING, allowNull:false}
})



module.exports=User