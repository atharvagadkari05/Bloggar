const Express = require('express')
const Blogpost = require('./routes/blogpost')
const bodyParser = require('body-parser');
const app = Express()
const router = Express.Router()
const PORT = process.env.port || 4001
const MongoConnection = require('../config/mongoconnection')
app.use('/v1/blogpost' , Blogpost)
app.use(Express.json())
MongoConnection();

app.post('/test', (req,res)=>{
   console.log(req.body)
})

app.use(bodyParser.json());
app.listen(PORT,()=>{
   console.log(`Listening at ${PORT}`)
})