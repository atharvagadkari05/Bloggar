const BlogModel = require('../models/blogModel')


const BlogpostHandler = async (req,res)=>{
var newblog = new Blog({
    title : req.body.title,
    content :req.body.content,
    intro:req.body.intro
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