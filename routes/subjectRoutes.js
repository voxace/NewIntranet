const router = require('express').Router()
const stage4routes = require('./subjectRoutes/stage4routes')
const stage5routes = require('./subjectRoutes/stage5routes')
const stage6routes = require('./subjectRoutes/stage6routes')

router.use('/stage4', stage4routes)
router.use('/stage5', stage5routes)
router.use('/stage6', stage6routes)

module.exports = router
