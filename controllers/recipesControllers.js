const path = require('path')

const recipesControllers ={
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views/index.html'))
    },
}

module.exports = recipesControllers