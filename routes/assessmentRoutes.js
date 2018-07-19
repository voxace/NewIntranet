const router = require('express').Router()
const renderDoc = require('../renderDoc')

router.get('/year7', (req, res) => {renderDoc(req,res,'')})
router.get('/year8', (req, res) => {renderDoc(req,res,'')})
router.get('/year9', (req, res) => {renderDoc(req,res,'')})
router.get('/year10', (req, res) => {renderDoc(req,res,'')})
router.get('/year11', (req, res) => {renderDoc(req,res,'')})
router.get('/year12', (req, res) => {renderDoc(req,res,'')})

module.exports = router
