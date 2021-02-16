const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const contactSchema = new Schema({
    name : {
        type:String,
        required: true
    },
    
    email : {
       type: String,
       required: true
    },
    
    subject :{
        type:String
    },

    message:{
        type:String
    }
    
    

})


module.exports = mongoose.model('ContactUs', contactSchema);