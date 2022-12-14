import * as dao from "./reviews-dao.js";

const ReviewsController = (app) => {
  const createReview = async (req, res) => {
    const review = req.body;
    const currentUser = req.session["currentUser"];
    review.author = currentUser._id;
    const actualReview = await dao.createReview(review);
    res.json(actualReview);
  };

  const findReviewsBySong = async (req, res) => {
    const songID = req.params.songID;
    const reviews = await dao.findReviewsBySong(songID);
    res.json(reviews);
  };

  const deleteReview = async (req, res) => {
    const reviewID = req.params.reviewID;
    const status = await dao.deleteReview(reviewID);
    res.send(status);
  };

  const updateReview = async (req, res) => {
    const reviewID = req.params.reviewID;
    const reviewUpdates = req.body;
    const status = await dao.updateReview(reviewID, reviewUpdates);
    res.json(status);
  };

  const findLastesReviews = async (req, res) => {
    const reviews = await dao.findLatestReviews()
    res.json(reviews)
  }

  app.post("/api/reviews", createReview);
  app.get("/api/song/:songID/reviews", findReviewsBySong);
  app.get("/api/reviews", findLastesReviews)
  app.post("/api/reviews/delete/:reviewID", deleteReview);
  app.post("/api/reviews/update/:reviewID", updateReview);
  
};
export default ReviewsController;
