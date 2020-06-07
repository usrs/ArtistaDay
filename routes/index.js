const router = require("express").Router()

router.use("/api", require("./dashboard.js"))
router.use(require("./viewRoutes.js"))

module.exports = router
