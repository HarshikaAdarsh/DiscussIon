const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
    heading:String,
    subheading:String,
    content:String,
    addby:String
});

module.exports = mongoose.model('new',newsSchema);