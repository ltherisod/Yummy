const express = require('express')
const router= express.Router()
const recipesControllers = require('../controllers/recipesControllers')
const userControllers = require('../controllers/userControllers')
router.route('/')
.get(recipesControllers.home)

router.route('/signUp')
.get(userControllers.signUp)
.post(userControllers.createAccount)

router.route('/signIn')
.get(userControllers.signIn)
.post(userControllers.logIn)

router.route('/logOut')
.get(userControllers.logOut)

router.route('/create')
.get(recipesControllers.createRecipe)

router.route('/myrecipes/:_id')
.get(recipesControllers.myRecipes)
.post(recipesControllers.addRecipe)

router.route('/deletedRecipe/:_id')
.get(recipesControllers.deleteRecipe)

router.route('/editRecipe/:_id')
.get(recipesControllers.editRecipe)

router.route('/error')
.get(userControllers.errorPage)
module.exports = router