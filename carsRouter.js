// create router object from the express library
const CarsRouter = require('express').Router()
// bring in the cars controller methods
const carsController = require('./carsController')
// Building all of our express routes for the car parts api
CarsRouter.route('/cars')
// retrieve all my cars from the db
  .get(carsController.getAll)
// retrieve and display a single car bases off of an id
CarsRouter.route('/cars/:idORmake')
  .get(carsController.getSingle)
// export the cars router object
module.exports = CarsRouter
