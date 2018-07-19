const express = require('express')
const wifiRoutes = require('./routes/wifiRoutes')
const byodRoutes = require('./routes/byodRoutes')
const subjectRoutes = require('./routes/subjectRoutes')
const assessmentRoutes = require('./routes/assessmentRoutes')
const pblRoutes = require('./routes/pblRoutes')
const app = express()
app.set('view engine', 'pug')
app.set('views', './views')

// Serve static files
app.use(express.static('./public'))

// Set up routes
app.get('/', (req, res) => {res.render('home')})
app.use('/wifi', wifiRoutes)
app.use('/byod', byodRoutes)
app.use('/subject', subjectRoutes)
app.use('/assessment', assessmentRoutes)
app.use('/pbl', pblRoutes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
