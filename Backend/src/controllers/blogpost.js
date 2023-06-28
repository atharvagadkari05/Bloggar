const BlogModel = require('../models/blogModel')
const Express = require('express')
const app = Express()


app.use(Express.json())
const BlogpostHandler = async (req,res)=>{


var newblog = new BlogModel({
    title : req.body.title,
    intro:req.body.intro,
    content :req.body.content,

})

await newblog.save().then(()=>{
    res.json({
        "status": "success",
        "message":"Blog created successfully"
    })
}).catch(err=>{
    res.json({
        "status": "failed",
        "message":err
    })
})
 }

module.exports = {BlogpostHandler}