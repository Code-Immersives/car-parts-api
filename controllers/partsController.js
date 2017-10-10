const Part = require('../models').Part

module.exports = {
  getAll: function (req, res) {
    Part.find({}, (err, parts) => {
      if (err) res.json({message: err, status: 204})
      // sending the parts collection to the user
      res.json(parts)
    })
  },
  getSingle: function (req, res) {
    Part.find({_id: req.params.id }, (err, part) => {
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
