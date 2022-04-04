/* eslint-disable no-unused-vars */
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const User = require("./models/user")
const Image = require("./models/image")
const Comment = require("./models/comment")

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method)
  console.log("Path:  ", request.path)
  console.log("Body:  ", request.body)
  console.log("---")
  next()
}

const url = process.env.MONGODB_URI

console.log("connecting to", url)
mongoose.connect(url)
  .then(result => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message)
  })

app.use(cors())
app.use(express.json())
app.use(requestLogger)

app.post("/api/users", (request, response) => {
  const body = request.body

  if (body.username === undefined) {
    return response.status(400).json({ error: "content missing" })
  }

  const user = new User({
    username: body.username,
    email: body.email,
    name: body.name,
    city: body.city,
    country: body.country,
    dateOfBirth: body.dateOfBirth,
    profilePic: body.profilePic
  })

  user.save().then(savedUser => {
    response.json(savedUser)
  })
})

app.get("/api/users", (request, response) => {
  User.find({}).then(users => {
    response.json(users)
  })
})

app.get("/api/users/:id", (request, response) => {
  User.findById(request.params.id).then(user => {
    response.json(user)
  })
})

app.delete("/api/users/:id", (request, response) => {
  User.findByIdAndDelete(request.params.id).then(user => {
    response.json(user)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}
app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})