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

router.post('/:gameId', withAuth, async (req, res) => {
    console.log('req.body', req.body);
    console.log('req.params', req.params);
    try {
        const newReview = await Review.create({
          ...req.body,
          game_id: req.params.gameId,
          user_id: req.session.user_id,
        });
        const updateReview = newReview.get({ plain: true });
        console.log('backend', updateReview);
      res.status(200).json(updateReview);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});



module.exports = router;