import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    imdbID: String,
    songID: String,
    username: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'reviews'})
export default reviewsSchema