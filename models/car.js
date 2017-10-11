const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Part = require('./part')

let carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  color: String,
  currParts: [{ type: Schema.Types.ObjectId, ref: 'part' }]
})

let Car = mongoose.model('car', carSchema)

module.exports = Car
