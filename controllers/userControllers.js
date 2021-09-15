const path = require('path')

const userControllers = {
    signUp: (req, res) =>{
        res.sendFile(path.join(__dirname, '..', 'views/signUp.html'))
    },
    signIn: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/signIn.html'))
    }
}

module.exports = userControllers