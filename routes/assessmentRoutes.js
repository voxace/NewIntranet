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

// Year 7
router.get('/year7', (req, res) => {
  renderDoc(req,res,'')
})

// Year 8
router.get('/year8', (req, res) => {
  renderDoc(req,res,'')
})

// Year 9
router.get('/year9', (req, res) => {
  renderDoc(req,res,'')
})

// Year 10
router.get('/year10', (req, res) => {
  renderDoc(req,res,'')
})

// Year 11
router.get('/year11', (req, res) => {
  renderDoc(req,res,'')
})

// Year 12
router.get('/year12', (req, res) => {
  renderDoc(req,res,'')
})

module.exports = router
