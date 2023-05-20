const Express = require('express')
const controller = require('../controllers/blogpost')
const router = Express.Router()

router.get('/', controller.BlogpostHandler)

module.exports = router