import reviewsModel from "./reviews-model.js";

export const createReview = (review) => reviewsModel.create(review);

export const findReviewsByMovie = (imdbID) =>
  reviewsModel.find({ imdbID }).populate("author").exec();

export const findReviewsByAuthor = (author) => reviewsModel.find({ author });

export const findReviewsBySong = (songID) =>
  reviewsModel.find({ songID: songID }).exec();

export const deleteReview = async (reviewID) => {
  const status = await reviewsModel.deleteOne({ _id: reviewID });
  return status;
};


// export const updateReview = async (reviewID, reviewUpdates) => {
//     const status = await reviewsModel.updateOne(
//         {_id: reviewID},
//         {$set: reviewUpdates}
//     );
//     return status;
//   };


export const updateReview = (tid, tuit) =>
    reviewsModel.updateOne({ _id: tid }, { $set: tuit });