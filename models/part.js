const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let partSchema = new Schema({
  category: String,
  name: String,
  subCategory: [String],
  qty: Number,
  cars: []
})

let Part = mongoose.model('part', partSchema)

module.exports = Part
