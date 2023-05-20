const Express = require('express')
const Blogpost = require('./routes/blogpost')
const app = Express()
const router = Express.Router()
const PORT = process.env.port || 4000

app.use('/v1/blogpost' , Blogpost)


app.listen(PORT,()=>{
   console.log(`Listening at ${PORT}`)
})