const Express = require('express')
const controller = require('../controllers/blogpost')
const router = Express.Router()

router.post('/', Express.json(), controller.BlogpostHandler)

module.exports = router