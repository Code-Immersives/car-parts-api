const CarsRouter = require('express').Router()
const cars = require('./cars')
// Building all of our express routes for the car parts api
CarsRouter.route('/cars')
// retrieve all my cars from the db
  .get((req, res) => {
    res.json(cars)
  })
// retrieve and display a single car bases off of an id
CarsRouter.route('/cars/:idORmake')
  .get((req, res) => {
    let matchTerm = Number.parseInt(req.params.idORmake)
    let myCar
    if (matchTerm > 0) {
      myCar = cars.filter(car => matchTerm == car.id)
    } else {
      myCar = cars.filter(car => req.params.idORmake == car.make)
    }
    if (myCar.length > 0) {
      res.json(myCar)
    } else {
      res.json({message: `no cars found with given id: ${req.params.id}`, status: 204})
    }
  })

module.exports = CarsRouter
