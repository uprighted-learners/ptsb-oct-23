const { mongoose } = require('../db')
const { model, Schema } = mongoose

// Schemas define the shape of a document
// You can pass different context information about each field
// https://mongoosejs.com/docs/guide.html#definition
const Product = new Schema({
  id: Number,
  name: String,
  price: Number,
  category: String,
})

// To use our schema and work w/ our data we must convert to a model
// https://mongoosejs.com/docs/models.html#compiling
module.exports = model('product', Product)
