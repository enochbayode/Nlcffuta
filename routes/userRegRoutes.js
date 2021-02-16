const passportLocal = require('../config/passport')
const passport = require('passport')
// const passport = require('passport');
const express = require('express');
const router = express.Router();
const User = require('../model/user');

 


//creating a user 
router.post('/create-user', (req,res, next)=>{
    var user = new User();

    user.email = req.body.email;
    user.fullname = req.body.fullname;
    user.password = req.body.password;
    
    User.findOne({email:req.body.email}, (err,existinguser)=>{
        if(existinguser){
            req.flash('error', 'Account with this email already exists');
            return res.redirect('/auth/register') 
        }else{
            user.save(function(err,user){
                if(err) return next(err);
                req.flash('message', 'Successful login!!'); 
                    req.login(user,function(err){
                        if(err) return next(err);
                        res.redirect('/auth/login');
                    })
            }) 
        } 
    })


});




function isAuthenticated(req, res, next) {

    if (req.user)
        return next();
  
    res.redirect('/');
  }

  router.get('/login',(req,res)=>{
    res.render('login', {
        title:'login page',
        login : req.flash('loginMessage')
        
    })
});

router.get('/register',(req,res)=>{
    res.render('register', {
        title:'SignUp page',
        error:req.flash('error')
    })
} )



router.get('/profile',isAuthenticated,  (req,res)=>{

    res.render('profile', {
        title : 'profile',
        user: req.user,
        message:req.flash('message')
        
    })

})




//login in user
router.post('/login',
  passport.authenticate('local-login', { successRedirect: '/auth/profile', failureRedirect: '/auth/login', failureFlash: true })
);



router.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/auth/login')
})







module.exports = router