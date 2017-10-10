// review app flow
// basic express trivia
// create a new model for parts
// what type of relationship do cars have to parts
const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let partSchema = new Schema({
  category: String,
  name: String,
  subCategory: [String],
  qty: Number,
  cars: []
})

// model methods
// pre after create update built in callbacks
let Part = mongoose.model('part', partSchema)

module.exports = Part
