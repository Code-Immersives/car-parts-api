const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  color: String
})

let Car = mongoose.model('car', carSchema)

module.exports = Car
