const router = require('express').Router()
const renderDoc = require('../../renderDoc')

router.get('/english', (req, res) => {renderDoc(req,res,'1_qx4qYpwa-89ZH953d1v4FxP2tFc2FESRx-ebw-KPa4')})

router.get('/mathematics', (req, res) => {renderDoc(req,res,'1cLVKMabQuUsiNsErvJoRrSKkNRMKolI58B57ov8JGDM')})

router.get('/science', (req, res) => {renderDoc(req,res,'1frTCKBkGrlQee6IfgQzDOKxbAJZLQr2fdWBoQ2RwA94')})

router.get('/hsie', (req, res) => {renderDoc(req,res,'1MCkllTxV25sm1OPy5UTRczDQABgRHIPUDym8LZ_9GUg')})

router.get('/technology', (req, res) => {renderDoc(req,res,'1k8tBT6qI1KG0fwA-JhuRtMvkI0qBc8BKDNABMR-81kA')})

router.get('/capa', (req, res) => {renderDoc(req,res,'1X_15Me6UAKnC_fSiPtg_NOCDfke-lnb6toIsrULTcek')})

router.get('/pdhpe', (req, res) => {renderDoc(req,res,'1HpJjUHv0eJQu9pglg4fld-Y1JHuCpmYFZ1siPP1bG3I')})

router.get('/stem', (req, res) => {renderDoc(req,res,'1da5nfJ7yTXE1Xy71Z7AEFByfMJZKUDmKk9sajLxW8hg')})

router.get('/integrated-curriculum', (req, res) => {renderDoc(req,res,'1pUKq6q2mrpDRoSuaYx1pnm8W2ax0xx6F-Jn5QSO4jcE')})

module.exports = router
