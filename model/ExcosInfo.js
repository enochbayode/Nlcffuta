const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const excosinfoSchema = new Schema({
    text: {
        type: String
    }
})



module.exports = mongoose.model('ExcosInfo', excosinfoSchema);