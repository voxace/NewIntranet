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

// Free Software
router.get('/software', (req, res) => {
  renderDoc(req,res,'1vH6OD4dhAbv60dzrk53OA9vWkoeZT-6f8-aQISWSgh4')
})

// What to Buy
router.get('/buy', (req, res) => {
  renderDoc(req,res,'1Ic2W8LP1NauhpZF1ogQgXdKOmNK2o_QDsNBgN3eeWlE')
})

// BYOD Policy
router.get('/policy', (req, res) => {
  renderDoc(req,res,'1oQy3zuuqOr5mC5ijv2j1S_53zodGPf8xgmzoUKpINZ8')
})

module.exports = router
