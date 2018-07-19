const request = require('request')

function renderDoc(req,res,id) {
  request('https://www.googleapis.com/drive/v3/files/'+id+'/export?mimeType=text%2Fhtml&key=AIzaSyD0_1oqZt3z5VQjlaPDJDbj1pG-O_yZeNc',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.render('docs', {body: body})
      }
  })
}

module.exports = renderDoc
