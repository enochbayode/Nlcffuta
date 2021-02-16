const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const PresidentSchema = new Schema({
    name : {
        type:String
    },
    
    excerpt : {
       type: String
    },
    
    imgUrl: {
        type:String
    }
})



module.exports = mongoose.model('President', PresidentSchema);