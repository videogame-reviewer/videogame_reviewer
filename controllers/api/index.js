const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
