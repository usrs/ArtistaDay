const router = require('express').Router()

router.use('/api', require('./imgurRoute'))
router.use('/api', require('./imageRoute'))
router.use(require('./viewRoutes'))

module.exports = router
