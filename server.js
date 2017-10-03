const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const logger = require('morgan')
const carRoutes = require('./routes').carsRouter
const bodyParser = require('body-parser')
// using 3rd party middleware
app.use(logger('dev'))
// use the body-parser middleware to access req.body
// parse application/json
app.use(bodyParser.json())
// make routes availble to client
app.use('/api/v1', carRoutes)
// run your server to listen on a given port
app.listen(port, (err) => {
  // check for an error when communicating with the server
  if (err) {
    console.log('server failed to start', err)
  } else {
    console.log(`You're connected to port: ${port}`)
  }
})
