const Sequelize = require('sequelize')
const db = new Sequelize('yummy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db