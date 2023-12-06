const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:Number,
    city:String
});

module.exports = mongoose.model('user',userSchema);