const router = require('express').Router();

const reviewRoutes = require('./review-routes.js');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
