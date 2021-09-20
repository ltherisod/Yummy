const urlControllers = {
    checkURL: (req, res, next) => {
        if(req.url.startsWith('/myrecipes/') || req.url.startsWith('/editRecipe/') || req.url.startsWith('/deletedRecipe/') ){
            next()
        }else{
            let validURL = ["/", "/signUp", "/signIn", "/create", "/logOut", "/error"]
            validURL.includes(req.url) ? next() : res.redirect('/error')
        }
    }
}
module.exports = urlControllers