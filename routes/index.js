const router = require('express').Router()

router.use('/api', require('./artistRoutes.js'))
router.use('/api', require('./itemRoutes.js'))
router.use('/api', require('./eventRoutes.js'))
router.use('/api', require('./artistUserRoutes.js'))
router.use('/api', require('./itemRoutes2.js'))

router.use(require('./viewRoutes.js'))

module.exports = router
