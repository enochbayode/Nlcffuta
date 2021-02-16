var mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const NewsLetterSchema = new Schema({
    email : {
        type: String,
        unique:true,
        lowercase:true,
        required: true
    },
})

module.exports = mongoose.model('newsletter', NewsLetterSchema);