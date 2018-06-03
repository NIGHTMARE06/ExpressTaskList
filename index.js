const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// Files
const routes = require('./routes')

// Settings
app.set('port', process.env.port || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use((req, res, next) => {
  console.log(`${req.url}  -  ${req.method}`)
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// Routes
app.use(routes)

// Listen
app.listen(app.get('port'), () => {
  console.log(`The server is running on port:${app.get('port')}`)
})
