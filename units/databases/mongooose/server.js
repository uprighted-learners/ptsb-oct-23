// Docs
// Mongoose - https://mongoosejs.com
// MongoDB (Mongoose is a wrapper) - https://www.mongodb.com/docs

// Connects our .env file to our project
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const StudentModel = require('./models/student')

const app = express()
app.use(express.json())
app.use(cors())

// console.log(process.env.SERVER_PORT)
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection

db.once('open', () => {
  console.log('connected to db')
  // throw new Error('derp depr')
})

db.on('error', (err) => {
  console.log('there was an error w/ db')
  console.log(err.message)
})

app.get('/', (req, res) => {
  res.send('homepage')
})

app.post('/createStudent', async (req, res) => {
  // send data with our HTTP request  - req.body
  // const fakeReqBodyData = {
  //   name: 'Tester',
  //   age: 34,
  //   cohort: 'ptsb-oct-23',
  //   type: 'software-development',
  //   active: false,
  // }

  const data = req.body

  // New instance of a student, pass fake data
  const student = new StudentModel(data)

  // Save to the database
  await student.save()

  res.json({
    success: true,
    student: student,
  })
})

app.get('/findStudent', async (req, res) => {
  const studentsSoftware = await StudentModel.find({
    type: 'software-development',
  })
    .where('age')
    .gt(30)

  const studentsUx = await StudentModel.find({
    type: 'ux-ui',
  })
    .where('age')
    .lt(30)

  res.json({
    success: true,
    students: [...studentsSoftware, ...studentsUx],
  })
})

// Standard Express server startup
app.listen(process.env.SERVER_PORT, () =>
  console.log(`server started at localhost:${process.env.SERVER_PORT}`),
)
