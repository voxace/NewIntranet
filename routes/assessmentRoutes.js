const router = require('express').Router()
const renderDoc = require('../renderDoc')

router.get('/year7', (req, res) => {renderDoc(req,res,'1w3fWeDHpWs0N_y170g0ReAQHpE8ZUMfsEqFThJRlFWI')})
router.get('/year8', (req, res) => {renderDoc(req,res,'1dmvXbmFVsM8EIgcoygNRJolWsIA_UsGjyswNcvej5o0')})
router.get('/year9', (req, res) => {renderDoc(req,res,'1oYJComFvdYKxVAgwO_abTQuVmyh8Bdw0z3TlKbBGTvc')})
router.get('/year10', (req, res) => {renderDoc(req,res,'1CzRL8TCV40qNu102SHe-wI4whpD3foYOTDmtDhQPAqo')})
router.get('/year11', (req, res) => {renderDoc(req,res,'1aD5CqwTU3h8ezJVviEXp6rcdMqKdHl-G_ngFoJET8PE')})
router.get('/year12', (req, res) => {renderDoc(req,res,'1t9mDSOEnmQHMZRmzfG6uOMBGjZ8qmfg4aC2VvlbtX74')})

module.exports = router
