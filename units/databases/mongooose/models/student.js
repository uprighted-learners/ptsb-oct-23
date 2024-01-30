const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  cohort: String,
  type: String,
  active: Boolean,
})

// Compiling our schema and exporting that compiled model
module.exports = model('Student', schema)
