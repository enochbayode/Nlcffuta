const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const ExcosSchema = new Schema({
    name : {
        type:String
    },
    
    phone : {
       type: String
    },
    
    office :{
        type:String
    },

    dept:{
        type:String
    },

    level :{
        type:String
    },
    
    imgUrl: {
        type:String
    }
})


module.exports = mongoose.model('Executives', ExcosSchema);