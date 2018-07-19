const router = require('express').Router()
const renderDoc = require('../renderDoc')

router.get('/software', (req, res) => {renderDoc(req,res,'1vH6OD4dhAbv60dzrk53OA9vWkoeZT-6f8-aQISWSgh4')})
router.get('/buy', (req, res) => {renderDoc(req,res,'1Ic2W8LP1NauhpZF1ogQgXdKOmNK2o_QDsNBgN3eeWlE')})
router.get('/policy', (req, res) => {renderDoc(req,res,'1oQy3zuuqOr5mC5ijv2j1S_53zodGPf8xgmzoUKpINZ8')})

module.exports = router
