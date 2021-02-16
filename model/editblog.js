const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const editBlogSchema = new Schema({
    title : {
        type:String
    },
    
    date : {
       type: Date
    },
    
    category :{
        type:String
    },

    excerpt:{
        type:String
    },
    
    imgUrl: {
        type:String
    },

    content: {
        type:String
    }

})



module.exports = mongoose.model('editBlog', editBlogSchema);