const express = require('express')
const morgan = require('morgan')
const routes = require('./server/routes')
const app = express()
routes(app)
const port = process.env.PORT || 8080

app.use(morgan('dev'))

app.listen(port)
console.log('Magic happening on port ' + port)
