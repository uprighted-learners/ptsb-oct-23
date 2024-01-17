const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL

const dbConnect = async () => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`starting database at ${DB_URL}`)
  } catch (err) {
    console.log('error connecting to database')
    console.log(err)
  }
}

module.exports = { dbConnect, mongoose }
