const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const logger = require('morgan')

// using 3rd party middleware
app.use(logger('dev'))

// create our routes for the api
app.get('/', (req, res) => {
  res.json({message: 'welcome to the home page', status: 200, mimeType: 'json'})
})
app.post('/', (req, res) => {
  res.json({message: 'you made a post request to home page', status: 200, mimeType: 'json'})
})
app.use((req, res, next) => {
  console.log('you hit my middleware')
  next()
})
// query string
// localhost:3000/info?title=atitle
app.get('/info', (req, res) => {
  let qryStr = req.query.title
  res.json({message: `Title: ${qryStr}`, status: 200})
})
// params object
app.get('/:name', (req, res) => {
  let name = req.params.name
  res.json({message: `Hello ${name}`, status: 200})
})
// start your server on a specific port and check for an error
app.listen(port, (err) => {
  if (err) {
    console.log('server failed to start', err)
  } else {
    console.log(`You're connected to port: ${port}`)
  }
})
