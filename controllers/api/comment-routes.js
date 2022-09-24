const router = require('express').Router();
// Import the Comment model for our routes
const { Review } = require('../../models');

// Users shouldn't post or update comments if they are not loggedIn
const withAuth = require('../../utils/auth');

// When a post/:id is viewed, make sure to include/display all its related comments
router.get('/', (req, res) => {
    Review.findAll({})
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        // Builds a new comment model instance and saves it
        Review.create({
                comment: req.body.comment,
                currentGame: req.body.currentGame,
                user_id: req.session.user_id,
            })
            .then(dbReviewData => res.json(dbReviewData))
            .catch4( err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});



module.exports = router;