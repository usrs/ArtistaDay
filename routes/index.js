const router = require('express').Router()

router.use('/api', require('./artistRoutes.js'))

router.use(require('./viewRoutes.js'))

module.exports = router