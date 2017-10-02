const CarsRouter = require('express').Router()
const controllers = require('./controllers')
// Building all of our express routes for the car parts api
CarsRouter.route('/cars')
// retrieve all my cars from the db
  .get(controllers.car.getAll)
// retrieve and display a single car bases off of an id
CarsRouter.route('/cars/:idORmake')
  .get(controllers.car.getSingle)

module.exports = CarsRouter
