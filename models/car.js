const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  color: String,
  currParts: []
})

// model methods
// pre after create update built in callbacks
let Car = mongoose.model('car', carSchema)

module.exports = Car
