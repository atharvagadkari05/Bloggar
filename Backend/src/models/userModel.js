let mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    // String is shorthand for {type: String}
    name:  String,
    avatar: String,
    blogs:[],
    date: { type: Date, default: Date.now },
    
 });

 let User = mongoose.model('user', userSchema)
 module.exports = User