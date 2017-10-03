// import the data from a model which will be the database soon
const cars = require('../models').carModel

// export an object that has the car controller methods
module.exports = {
  getAll: function (req, res) {
    res.json(cars)
  },
  getSingle: function (req, res) {
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
      res.json({message: `no cars found with given value: ${req.params.idORmake}`, status: 204})
    }
  },
  create: function (req, res) {
    // this is allowed because of my body-parser middleware in server.js
    let newCar = req.body
    console.log('data from request body', req.body)
    res.json(newCar)
  },
  update: function (req, res) {
    let myCar = cars.find(car => car.id == req.params.idORmake)
    console.log('data from request', myCar, req.params.idORmake, req.body)
    // {make: "honda", model: "civic", year: 2017, id: 11}
    myCar = {...myCar, ...req.body}
    res.json(myCar)
  },
  destroy: function (req, res) {
    let newCars = cars.filter(car => car.id != req.params.idORmake)
    res.json(newCars)
  }
}
