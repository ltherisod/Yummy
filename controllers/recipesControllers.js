const path = require('path')
const Recipe = require('../models/Recipe')

const recipesControllers ={
    home: (req, res) => {
        res.render('index',{
            title:'Home',
             userId : req.session.userId,
            loggedIn: req.session.loggedIn
        })
    },
    myRecipes : async (req, res) => {
        const recipes = await Recipe.find({userId:req.session.userId})
        
        res.render('myrecipes', {
            title:'My Recipes',
            recipes,
            userId : req.session.userId,
            loggedIn: req.session.loggedIn
        })
    },
    createRecipe : (req, res) => {
        res.render('create', {
            title: 'Create',
            editRecipe: false,
            userId : req.session.userId,
            loggedIn: req.session.loggedIn
            
        })
     },
    addRecipe: async (req, res) => {
        console.log(req.body)
        const {title, description, time, servings, ingredients, photo, type, _id} = req.body
        let newRecipe;
        if(!_id){
            newRecipe= new Recipe({title, description, time, servings, ingredients, photo, type, userId:req.params._id})
        }else{
            newRecipe = await Recipe.findOne({_id})
            newRecipe.title = title
            newRecipe.description = description
            newRecipe.time = time
            newRecipe.servings = servings
            newRecipe.ingredients = ingredients
            newRecipe.photo = photo
            newRecipe.type = type
            newRecipe.userId = req.params._id
        } 
        console.log(newRecipe)
        try {
            await newRecipe.save()
            res.redirect(`/myrecipes/${req.session.userId}`)
        }catch(error){
            console.log(error.message)
        }
    },
    deleteRecipe : async (req, res) => {
        await Recipe.findOneAndDelete({_id:req.params._id})
        res.redirect(`/myrecipes/${req.session.userId}`)
    },
    editRecipe : async (req, res) => {
        let recipeEdited = await Recipe.findOne({_id:req.params._id}) 
        console.log(recipeEdited)
        res.render('create', {
            title : 'Edit recipe',
            editRecipe: recipeEdited,
            userId : req.session.userId,
            loggedIn: req.session.loggedIn
        })
    }
}

module.exports = recipesControllers