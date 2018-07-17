const router = require('express').Router()
const request = require('request')
const {google} = require('googleapis')

function renderDoc(req,res,id) {
  request('https://www.googleapis.com/drive/v3/files/'+id+'/export?mimeType=text%2Fhtml&key=AIzaSyD0_1oqZt3z5VQjlaPDJDbj1pG-O_yZeNc',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.render('docs', {body: body})
      }
  })
}

router.get('/iphone', (req, res) => {
  renderDoc(req,res,'1Ur0insn5PkV1iEoE6AiZA9sfYFOWZAbAbu6ejZuPPDg')
})

router.get('/android', (req, res) => {
  renderDoc(req,res,'1b2bQgHBKZcW-oAyBoQYkTRzIOwhS43vcvQFeyjjGANU')
})

router.get('/mac', (req, res) => {
  renderDoc(req,res,'11kx862ATYbSabmIebnHH8QBwTdtTfq6a5hgrejDahho')
})

router.get('/windows', (req, res) => {
  renderDoc(req,res,'1xB8OTTLZAMh9o7mR80BtjPTGemnfkBt6YYu1fi8lBmA')
})

module.exports = router
