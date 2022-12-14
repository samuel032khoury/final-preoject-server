import mongoose from "mongoose";

const favoritesSchema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  song: {type: mongoose.Schema.Types.String, ref: 'SongsModel'},
}, {collection: 'favorites'});
favoritesSchema.index({'user': 1, 'song': 1}, {unique: true})
export default favoritesSchema;