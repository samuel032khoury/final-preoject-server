import reviewsModel from "./reviews-model.js";
import songsModel from "../songs/songs-model.js";

export const createReview = (review) => reviewsModel.create(review);

export const findReviewsByMovie = (imdbID) =>
  reviewsModel.find({ imdbID }).populate("author").exec();

export const findReviewsBySong = (songID) =>
  reviewsModel.find({ songID: songID }).exec();

export const deleteReview = async (reviewID) => {
  const status = await reviewsModel.deleteOne({ _id: reviewID });
  return status;
};

export const updateReview = (reviewID, review) =>
  reviewsModel.updateOne({ _id: reviewID }, {createAt: 0}, { $set: review });


export const findReviews = async () => {
    const result = await reviewsModel.find().sort({"createAt": -1})
    return result
}