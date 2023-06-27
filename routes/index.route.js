const auth = require('../middlewares/auth')
const indexController = require('../controllers/index.controller')
const authController = require('../controllers/auth.controller')
const router = require('express').Router()
const upload = require('../storage')

router.get('/', indexController.index)

router.get('/login', authController.index)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router;