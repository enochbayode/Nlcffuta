var express = require('express');
var router = express.Router();
const User = require('../model/user');
const passport = require('passport');
const session = require('express-session');
const Blog = require('../model/blog');
const Messages = require('../model/messages');
const Executives = require('../model/Executives');
const ExcosInfo = require("../model/ExcosInfo");
const President = require('../model/President');
const Gallery = require('../model/Gallery');
const UpcomingEvent = require('../model/Events');
const ContactUs = require('../model/contact');


// router.post('/contact-us', (req, res) => {

//   const Contact = new ContactUs({

//      name : req.body.name,
//      email : req.body.email,
//      subject: req.body.subject,
//      message: req.body.message

//   }).save((err,Contact) => {
//      if(err) return console.error(err);
//      res.redirect('/contact');
//   });

   
// })

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact',
    { title: 'Contact Us' } 
    );
  });

router.get('/UploadBgs', (req,res)=>{

  Blog
      .find({})
      .sort({'date' : -1})
      .exec((err,blog)=>{

          res.render('UploadBgs', {

              title: 'Upload blog',
              user: req.user,
              blog:blog
      
          } );
      })

})

router.get('/', (req,res)=>{

  President
      .find({})
      .sort({'date' : -1})
      .exec((err,president)=>{

  Messages
      .find({})
      .sort({'date' : -1})
      .exec((err,Msg)=>{

  Blog
     .find({})
     .sort({'date' : -1})
     .exec((err,blog)=>{

  Gallery
    .find({})
    .sort({'date' : -1})
    .exec((err,gallery)=>{

  UpcomingEvent
    .find({})
    .sort({'date' : -1})
    .exec((err,event)=>{    

        res.render('index', {

            title: 'Home Page',
            user: req.user,
            president:president,
            Msg:Msg,
            blog:blog,
            gallery:gallery,
            event:event
    
        });
    });

    });
    
    });

    });

    });

  })

          

// ======================upload message route=================

router.get('/UploadMsg', (req,res)=>{

  Messages
      .find({})
      .sort({'date' : -1})
      .exec((err,Msg)=>{

          res.render('UploadMsg', {

              title: 'Upload Message',
              user: req.user,
              Msg:Msg
      
          } );
      })

})


router.get('/messages', (req,res)=>{

  Messages
      .find({})
      .sort({'date' : -1})
      .exec((err,Msg)=>{

          res.render('messages', {

              title: 'Messages',
              user: req.user,
              Msg:Msg
      
          } );
      })

})


router.get('/events', (req,res)=>{

  UpcomingEvent
      .find({})
      .sort({'date' : -1})
      .exec((err,event)=>{

          res.render('events', {

              title: 'Upcoming Events',
              user: req.user,
              event:event
      
          } );
      })

})


// ======================Excos=======================

router.get('/UploadExs', (req,res)=>{

  Executives
      .find({})
      .sort({'date' : -1})
      .exec((err,excos)=>{

        ExcosInfo
        .find({})
        .sort({'date' : -1})
        .exec((err,text)=>{

          res.render('UploadExs', {

              title: 'Upload Executives',
              user: req.user,
              excos:excos,
              text: text
      
          } );
      })
    })

})

router.get('/about', (req,res)=>{

  Executives
      .find({})
      .sort({'date' : -1})
      .exec((err,excos)=>{

  ExcosInfo
    .find({})
    .sort({'date' : -1})
    .exec((err,text)=>{  

          res.render('about', {

              title: 'About Us',
              user: req.user,
              excos:excos,
              text: text
      
          } );
      })

    })

})

// =====================president upload===================
router.get('/UploadPresi', (req,res)=>{

  President
      .find({})
      .sort({'date' : -1})
      .exec((err,president)=>{

          res.render('UploadPresi', {

              title: 'Upload President',
              user: req.user,
              president:president
      
          } );
      })

})

// =====================Events upload===================
router.get('/UploadEvts', (req,res)=>{

  UpcomingEvent
      .find({})
      .sort({'date' : -1})
      .exec((err,event)=>{

          res.render('UploadEvts', {

              title: 'Upload Events',
              user: req.user,
              event:event
      
          } );
      })

})

// ====================Upload Gallery===================
router.get('/UploadGal', (req,res)=>{

  Gallery
      .find({})
      .sort({'date' : -1})
      .exec((err,gallery)=>{

          res.render('UploadGal', {

              title: 'Upload Gallery',
              user: req.user,
              gallery:gallery
      
          } );
      })

})

router.get('/blogs', (req,res)=>{
    console.log('query = ', req.query)
    const limit = req.query.limit ? req.query.limit: null;
    const skip = req.query.skip ? req.query.skip: null;
  Blog
 //    .find({}, null, {limit: parseInt(skip), skip: parseInt(skip)})
  .find({})  
      .sort({'date' : -1})
      .exec((err,blog)=>{

          res.render('blog', {

              title: 'Blog',
              user: req.user,
              blog:blog
      
          } );
          console.log('blog ==> ', blog)
      })

})

router.get('/:id', (req,res)=>{
  Blog.findOne({ _id :req.params.id})
  .exec((err,blog)=>{
      res.render('blog-single',{
          blog : blog,
          title: 'Blog-Single'
      })
  })
})




// /* GET about page. */
// router.get('/about', function(req, res, next) {
//   res.render('about',
//     { title: 'About Us' } 
//     );
//   });

// router.get('/contact-success', function(req, res, next) {
//   res.render('contact-success',
//     { title: '' } 
//     );
//   });

// router.get('/contact-failure', function(req, res, next) {
//   res.render('contact-failure',
//     { title: '' } 
//     );
//   });

// router.get('/categories/:cat', (req,res)=>{
//   Product.find({ category : req.params.cat}) 
//   .exec((err,category)=>{
//       res.render('categories', {
//           category:category,
//           param: req.params.cat,
//           title:'Category'
//       })
//   })
// })



/* GET about page. */
// router.get('/messages', function(req, res, next) {
//   res.render('messages',
//     { title: 'Messages' } 
//     );
//   });

/* GET  page. */
// router.get('/UploadGal', function(req, res, next) {
//   res.render('UploadGal',
//     { title: 'Upload-Gallery' } 
//     );
// });


/* GET  page. */
// router.get('/UploadPresi', function(req, res, next) {
//   res.render('UploadPresi',
//     { title: 'Upload-President' } 
//     );
// });


// router.get("*" , function(req, res){
//   res.render("404 page", 
//   { title: 'Not Found' } 
//   );
// })






module.exports = router;