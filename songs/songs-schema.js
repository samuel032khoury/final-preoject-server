import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
  id: { type: String, unique: true, required: true},
  popularity: Number,
  duration_ms: Number,
  artist: String,
  album: String,
  name: String,
  image: String,
}, {collection: 'songs'})

export default songsSchema