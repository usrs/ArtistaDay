const router = require('express').Router()

router.use('/api', require('./imgurRoute.js'))
router.use('/api', require('./imageRoute.js'))
router.use(require('./viewRoutes.js'))

module.exports = router
