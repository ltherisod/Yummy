const path = require('path')
const Recipe = require('../models/Recipe')

const recipesControllers ={
    home: (req, res) => {
        console.log(req.session)
        res.render('index',{
            title:'Home',
             userId : req.session.userId,
             loggedIn: req.session.loggedIn
        })
    },
    myRecipes : async (req, res) => {
        console.log(req.par)
        const recipes = await Recipe.findAll({where:{userId:req.params.id}})
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
        const {title, description, time, servings, ingredients, photo, type, id} = req.body
        let newRecipe;
        if(!id){
            newRecipe= new Recipe({title, description, time, servings, ingredients, photo, type, userId:req.params.id})
        }else{
            newRecipe = await Recipe.findOne({where:{id}})
            newRecipe.title = title
            newRecipe.description = description
            newRecipe.time = time
            newRecipe.servings = servings
            newRecipe.ingredients = ingredients
            newRecipe.photo = photo
            newRecipe.type = type
            newRecipe.userId = req.params.id
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
        let recipeDeleted = await Recipe.findByPk(req.params.id)
        await recipeDeleted.destroy()
        res.redirect(`/myrecipes/${req.session.userId}`)
    },
    editRecipe : async (req, res) => {
        let recipeEdited = await Recipe.findByPk(req.params.id) 
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