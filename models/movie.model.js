const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  employer: String,
  duration: String,
  image: String,
  description: String,
  genre: String,
  year: Number,
  link: String,
  country: String,
  role: [String],
});

const Movie = model("movies", movieSchema);

module.exports = Movie;
