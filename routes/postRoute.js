const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser");
const NewsLetter = require('../model/newsletter');


var morgan = require('morgan');
const registrationForm = require('../model/registrationForm');
const { request, response } = require('express');


router.post('/register', (req, res) => {

   const regForm = new registrationForm({

      fullname : req.body.fullname,
      email : req.body.email,
      password: req.body.password 

   }).save((err,regForm) => {
      if(err) return console.error(err);
      console.log('very good')
      res.redirect('/login');
   });

    
})



// Newsletter signUp
// router.post('/signUp',  (req,res)=>{
//    const newsletter = new NewsLetter({

//       email : req.body.email  

//    }).save((err,newsletter) => {
//       if(err) return console.error(err);
//       console.log('News letter signed up succesful')
//       res.redirect('/');

//    });

//    request(options, (err, response, body) => {

//    })
    
// })


module.exports = router;