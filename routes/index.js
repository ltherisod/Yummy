const express = require('express')
const router= express.Router()
const recipesControllers = require('../controllers/recipesControllers')
const userControllers = require('../controllers/userControllers')
router.route('/')
.get(recipesControllers.home)

router.route('/signUp')
.get(userControllers.signUp)

router.route('/signIn')
.get(userControllers.signIn)



// .router.route('/breakfast')
// .get(recipesControllers.breakfast)

// .router.route('/meal')
// .get(recipesControllers.meal)

// .router.route('/dessert')
// .get(recepiesControllers.dessert)

// .router.route('drinks')
// .get(recepiesControllers.drinks)


module.exports = router