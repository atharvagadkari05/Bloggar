let mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    // String is shorthand for {type: String}
    title:  String,
    intro: String,
    content: String,
    website: String,
    
    date: { type: Date, default: Date.now },
    
 });

 let Blog = mongoose.model('Blog', blogSchema)
 module.exports = Blog