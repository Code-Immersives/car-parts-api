
// import the data from a model which will be the database soon
const Car = require('../models').Car

// export an object that has the car controller methods
module.exports = {
  getAll: function (req, res) {
    Car.find({}, (err, cars) => {
      if (err) res.json({message: err, status: 204})
      // sending the cars collection to the user
      res.json(cars)
    })
  },
  getSingle: function (req, res) {
    let objectID = Number.parseInt(req.params.idORmake)
    if (objectID > 0) {
      // search database by id
      Car.find({_id: req.params.idORmake }, (err, car) => {
        if (err) res.json({message: err, status: 204})
        if (!err) res.json(car)
      })
    } else {
      // search database by make
      Car.find({ make: req.params.idORmake }, (err, car) => {
        if (err) res.json({message: err, status: 204})
        if (!err) res.json(car)
      })
    }
  },
  create: function (req, res) {
    // this is allowed because of my body-parser middleware in server.js
    let newCar = new Car(req.body)
    newCar.save((err, car) => {
      if (err) res.json({message: err, status: 302})
      res.json(car)
    })
  },
  update: function (req, res) {
    Car.findOneAndUpdate({_id: req.params.idORmake}, req.body, {new: true}, (err, car) => {
      if (err) res.json({message: err, status: 304})
      res.json(car)
    })
  },
  destroy: function (req, res) {
    Car.findOneAndRemove({_id: req.params.idORmake}, (err) => {
      if (err) res.json({message: err, status: 304})
      res.json({message: `Car with ${req.params.idORmake} deleted`, status: 200})
    })
  }
}
