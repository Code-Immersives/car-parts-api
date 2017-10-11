const Part = require('../models').Part
const Car = require('../models').Car

module.exports = {
  getAll: function (req, res) {
    console.log('coming from the url', req.query.make)
    if (req.query.make) {
      Car.find({ make: req.query.make}, (err, cars) => {
        if (err) res.json(err)
        if (cars.length === 0) {
          res.json({message: `no cars found with make: ${req.query.make}`})
        } else {
          let carIDs = cars.map(car => car._id.toString())
          console.log('car ids', carIDs)
          Part.find({})
          .where('cars').in(carIDs)
          .exec((err, parts) => {
            if (err) res.json(err)
            if (!err) res.json(parts)
          })
        }
      })
    } else {
      Part.find({})
        .exec((err, parts) => {
          if (err) {
            res.json(err)
          } else {
            res.json(parts)
          }
        })
    }
  },
  getSingle: function (req, res) {
    Part.find({_id: req.params.id })
    .exec((err, part) => {
      if (err) res.json({message: err, status: 204})
      if (!err) res.json(part)
    })
  },
  create: function (req, res) {
    let newPart = new Part(req.body)
    newPart.save((err, part) => {
      if (err) res.json({message: err, status: 302})
      res.json(part)
    })
  },
  update: function (req, res) {
    Part.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, part) => {
      if (err) res.json({message: err, status: 304})
      res.json(part)
    })
  },
  destroy: function (req, res) {
    Part.findOneAndRemove({_id: req.params.id}, (err) => {
      if (err) res.json({message: err, status: 304})
      res.json({message: `Part with ${req.params.id} deleted`, status: 200})
    })
  }
}
