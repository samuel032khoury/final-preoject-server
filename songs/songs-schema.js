import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
  title: {type: String, required: true},
  likes: {type: Number, default: 0},
  liked: {type: Boolean, default: false},
  rating: String,
  genre: {type: String}
}, {collection: 'songs'})

export default songsSchema