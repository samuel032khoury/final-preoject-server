import * as dao from "./reviews-dao.js";
import { findReviewsByAuthor, findReviewsByMovie } from "./reviews-dao.js";

const ReviewsController = (app) => {
    const findReviewsByMovie = async (req, res) => {
        const imdbID = req.params.imdbID;
        const reviews = await dao.findReviewsByMovie(imdbID);
        res.json(reviews);
      };
      
      const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author;
        const reviews = await dao.findReviewsByAuthor(author);
        res.json(reviews);
      };
    

  const createReview = async (req, res) => {
    const review = req.body;
    console.log(review);
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
    const reviewID = req.params.reviewID
    // const deleteReview = await dao.deleteReviewByID(reviewID)
    const status = await dao.deleteReview(reviewID)
        // movies = movies.filter(
        //     (m) => m._id !== mid)
    res.send(status)
  }

  const updateReview = async (req, res) => {
    const reviewID = req.params.reviewID
    const reviewUpdates = req.body
    const status = await dao.updateReview(reviewID, reviewUpdates)
    res.json(status);
}

  

  app.post("/api/reviews", createReview);
  app.get("/api/song/:songID/reviews", findReviewsBySong);
  app.post("/api/reviews/delete/:reviewID", deleteReview)
  app.post("/api/reviews/update/:reviewID", updateReview)

  
  app.get("/api/movies/:imdbID/reviews", findReviewsByMovie);
  app.get("/api/users/:author/reviews", findReviewsByAuthor);
};
export default ReviewsController;
