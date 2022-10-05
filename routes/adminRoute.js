const express = require('express');
const adminrouter = express.Router();
// const { adminRoutes } = require("./routes/adminRoute");
const multer = require('multer');
const path =  require('path');
const Blog = require('../model/blog');
const Executives = require('../model/Executives');
const ExcosInfo = require("../model/ExcosInfo");
const Messages = require('../model/messages');
const UpcomingEvent = require('../model/Events');
const President = require('../model/President');
const Gallery = require('../model/Gallery');
const { Storage } = require("../storage");

console.log(process.env.Storage_url) 

const storage = new Storage();

// inside multer({}), file upto only 100MB can be uploaded
const upload = storage.upload.fields([

    {
        name: "imgUrl",
        maxCount: 4 
    },

    {
        name: "fileUrl",
        maxCount: 1
    }
])

adminrouter.post('/post',  (req,res)=>{

    // Admin landing page after signing in
})

adminrouter.post('/post-bg',  (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log( req.files.imgUrl[0].filename);
            
            const blog = new Blog({
                title : req.body.title,
                date: req.body.date,
                category:req.body.category,
                excerpt:req.body.excerpt,
                editor1:req.body.editor1,
                imgUrl:  process.env.Storage_url +req.files.imgUrl[0].filename
            }).save((err,blog)=>{
                if(err){
                    console.log(err)
                }else{
                    res.redirect('/UploadBgs');
                    // console.log(blog.title)
                }
            })

        }
    })
 
})

//this route helps us to delete a blog post
adminrouter.post('/blogDelete/:id', (req,res)=>{
    
    Blog.findByIdAndRemove({ _id : req.params.id }).then((Blog)=>{
        res.redirect('/UploadBgs')
    })

});

// excos info
adminrouter.post('/excos-info', (req, res) => {
    const text = new ExcosInfo({

        text : req.body.text,
        
  
     }).save((err,text) => {
        if(err) return console.error(err);
        console.log('very good')
        res.redirect('/UploadExs');
     });
  
      
  })

//this route helps us to delete a excos info
adminrouter.post('/textDelete/:id', (req,res)=>{
    
    ExcosInfo.findByIdAndRemove({ _id : req.params.id }).then((ExcosInfo)=>{
        res.redirect('/UploadExs')
    })

});

//this route helps us to delete a excos post
adminrouter.post('/eventDelete/:id', (req,res)=>{
    
    UpcomingEvent.findByIdAndRemove({ _id : req.params.id }).then((UpcomingEvent)=>{
        res.redirect('/UploadEvts')
    })

});

// =========================Message======================================

adminrouter.post('/post-msg',  (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log( req.files.imgUrl[0].filename);
            
            const Msg = new Messages({
                title : req.body.title,
                name: req.body.name,
                date: req.body.date,
                category:req.body.category,
                excerpt:req.body.excerpt,
                fileUrl: process.env.Storage_url +req.files.fileUrl[0].filename,
                imgUrl:  process.env.Storage_url +req.files.imgUrl[0].filename
            }).save((err, Msg)=>{
                if(err){
                    console.log(err)
                }else{
                    res.redirect('/UploadMsg');
                    
                }
            })

        }
    })
 
})

//this route helps us to delete a message post
adminrouter.post('/MsgDelete/:id', (req,res)=>{
    
    Messages.findByIdAndRemove({ _id : req.params.id }).then((Messages)=>{
        res.redirect('/UploadMsg')
    })

});

// =========================Executives======================================

adminrouter.post('/post-excos',  (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log( req.files.imgUrl[0].filename);
            
            const excos = new Executives({
                name : req.body.name,
                office: req.body.office,
                dept:req.body.dept,
                phone:req.body.phone,
                level:req.body.level,
                imgUrl:  process.env.Storage_url +req.files.imgUrl[0].filename
            }).save((err, excos)=>{
                if(err){
                    console.log(err)
                }else{
                    res.redirect('/UploadExs');
                    
                }
            })

        }
    })
 
})

//this route helps us to delete a excos post
adminrouter.post('/excosDelete/:id', (req,res)=>{
    
    Executives.findByIdAndRemove({ _id : req.params.id }).then((Executives)=>{
        res.redirect('/UploadExs')
    })

});

// =========================Events======================================

adminrouter.post('/post-events',  (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log( req.files.imgUrl[0].filename);
            
            const event = new UpcomingEvent({
                title : req.body.title,
                date: req.body.date,
                venue:req.body.venue,
                imgUrl: process.env.Storage_url +req.files.imgUrl[0].filename
            }).save((err,event)=>{
                if(err){
                    console.log(err)
                }else{
                    res.redirect('/UploadEvts');
                    
                }
            })

        }
    })
 
})

// =========================President======================================

adminrouter.post('/post-president',  (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log( req.files.imgUrl[0].filename);
            
            const president = new President({
                name : req.body.name,
                excerpt:req.body.excerpt,
                imgUrl: process.env.Storage_url +req.files.imgUrl[0].filename
            }).save((err, president)=>{
                if(err){
                    console.log(err)
                }else{
                    res.redirect('/UploadPresi');
                    
                }
            })

        }
    })
 
})

//this route helps us to delete a president post
adminrouter.post('/presidentDelete/:id', (req,res)=>{
    
    President.findByIdAndRemove({ _id : req.params.id }).then((President)=>{
        res.redirect('/UploadPresi')
    })

});
// =========================Gallery======================================

adminrouter.post('/post-gallery',  (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log( req.files.imgUrl[0].filename);
            
            const gallery = new Gallery({
                name : req.body.name,
                // excerpt:req.body.excerpt,
                imgUrl: process.env.Storage_url +req.files.imgUrl[0].filename
            }).save((err, gallery)=>{
                if(err){
                    console.log(err)
                }else{
                    res.redirect('/UploadGal');
                    
                }
            })

        }
    })
 
})

//this route helps us to delete a gallery post
adminrouter.post('/galleryDelete/:id', (req,res)=>{
    
    Gallery.findByIdAndRemove({ _id : req.params.id }).then((Gallery)=>{
        res.redirect('/UploadGal')
    })

});

 

function isAuthenticated(req,res,next){
    if(req.user){
       return next()
    }else{
        res.redirect('/');
    }
}








module.exports = adminrouter;