// Import DB connection
const mongoose = require("../db/connection")

// Create a new schema
const JokeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  punchline: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

// Giving mongoose the schema to build the model
const Joke = mongoose.model("Joke", JokeSchema)

// exporting the Joke model
module.exports = Joke
