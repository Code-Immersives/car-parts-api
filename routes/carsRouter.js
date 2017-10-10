// create router object from the express library
const CarsRouter = require('express').Router()
// bring in the cars controller methods
const carsController = require('../controllers').carsController
// Building all of our express routes for the car parts api
// query string for searching by different params
CarsRouter.route('/cars')
// retrieve all my cars from the db
  .get(carsController.getAll)
  // create a post response for /cars to create a car
  .post(carsController.create)
// retrieve and display a single car bases off of an id
CarsRouter.route('/cars/:idORmake')
  .get(carsController.getSingle)
  .put(carsController.update)
  .delete(carsController.destroy)
// export the cars router object
module.exports = CarsRouter
