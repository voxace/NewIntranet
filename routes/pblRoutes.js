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
router.get('/thumbs', (req, res) => {
  renderDoc(req,res,'')
})

module.exports = router
