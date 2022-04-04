const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  name: String,
  city: String,
  country: String,
  dateOfBirth: String,
  profilePic: String,
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image"
  }]
})

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("User", userSchema)