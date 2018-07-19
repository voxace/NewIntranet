const router = require('express').Router()
const renderDoc = require('../renderDoc')

router.get('/thumbs-up', (req, res) => {renderDoc(req,res,'107JOpXhizpy_TgKv1jdjgL7HAXL2kG3WrN1bgjbhypE')})
router.get('/merit-awards', (req, res) => {renderDoc(req,res,'1CxjYE4b9i0u6wHH7HzIul0T8MnySEzR_nMRn5RIe2jE')})
router.get('/rap-scores', (req, res) => {renderDoc(req,res,'1VXlveLGBbiY7Tjuhr3VLK_xK9YeMo6_ztwV-oAJ83kc')})
router.get('/excursions', (req, res) => {renderDoc(req,res,'10gLCf4V4Xqt6_J5AIxsG9LsM5lMQipOG__jJDZF2uhE')})
router.get('/special-awards', (req, res) => {renderDoc(req,res,'1eb3zj8oBhooGSyalpeaWU28xgTo7UOTTENDpAzIEJBo')})

module.exports = router
