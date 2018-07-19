const router = require('express').Router()
const renderDoc = require('../renderDoc')

router.get('/iphone', (req, res) => {renderDoc(req,res,'1Ur0insn5PkV1iEoE6AiZA9sfYFOWZAbAbu6ejZuPPDg')})
router.get('/android', (req, res) => {renderDoc(req,res,'1b2bQgHBKZcW-oAyBoQYkTRzIOwhS43vcvQFeyjjGANU')})
router.get('/mac', (req, res) => {renderDoc(req,res,'11kx862ATYbSabmIebnHH8QBwTdtTfq6a5hgrejDahho')})
router.get('/windows', (req, res) => {renderDoc(req,res,'1xB8OTTLZAMh9o7mR80BtjPTGemnfkBt6YYu1fi8lBmA')})

module.exports = router
