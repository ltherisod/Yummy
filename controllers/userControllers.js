const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const path = require('path')

const userControllers = {
    signUp: (req, res) =>{
        if(req.session.loggedIn){
            res.redirect('/')
        }else{
            res.render('signUp',{
                title: 'Sign Up',
                loggedIn: req.session.loggedIn,
                error:null
            })
        }
        
    },
    signIn: (req, res) => {
        if(req.session.loggedIn){
            res.redirect('/')
        }else{
             res.render('signIn',{
            title:'Sign In',
            loggedIn: req.session.loggedIn, 
            error: null
        })
        }
       
    }, 
    createAccount: async(req, res) =>{
        const {firstname, lastname, email, password} = req.body
        let cryptPass = bcryptjs.hashSync(password)
        let newUser = await new User ({firstname, lastname, email, password:cryptPass })
        try{
            let existingUser = await User.findOne({where:{email}})
            if(existingUser) throw new Error(' This mail is already in use ⛔')
            await newUser.save()
            req.session.loggedIn = true
            req.session.name = newUser.firstname
            req.session.userId = newUser.id
            res.redirect('/')
        }catch(error){
            res.render('signUp', {
                title: 'Sign Up',
                loggedIn: req.session.loggedIn,
                error:error.message
            })
        }
    },
    logIn: async(req, res) =>{
        const{email, password} = req.body
        try{
            let user = await User.findOne({where:{email}})
            if(!user) throw new Error(' Wrong password or email ⛔')
            let correctPass = bcryptjs.compareSync(password, user.password)
            if(!correctPass) throw new Error(' Wrong password or email ⛔')
            req.session.loggedIn = true
            req.session.name = user.firstname
            req.session.userId = user.id
            res.redirect('/')
        }catch(error){
            res.render('signIn',{
                title:'Sign In',
                loggedIn: false,
                error:error.message
            })
        }
    },
    logOut: (req, res) =>{
        req.session.destroy(()=>{
            res.redirect('/')
        })
    },
    errorPage:(req, res) => {
        res.render('error',{
            title:'Error'
        })
    }
  
}

module.exports = userControllers