const { Review } = require('../models');

const reviewsdata = [
  {
    game_id: 1,
    // filename: '01-blossoming-apricot.jpg',
    comment:
      'Great Game.',
    user_id: 1,
  },
  {
    game_id: 1,
    // filename: '02-cosmos-flowers.jpg',
    comment: 'An all time classic!.',
    user_id: 2,
  },
  {
    game_id: 2,
    // filename: '03-sand-sea-summer.jpg',
    comment: 'Sandy beach with the blue sea and sky in the background.',
    user_id: 4,
  },
  {
    game_id: 2,
    // filename: '04-beach-chairs.jpg',
    comment: 'Two beach chairs under a beach umbrella on the beach.',
    user_id: 2,
  },
  // {
  //   game_id: 2,
  //   // filename: '05-beach-sunrise.jpg',
  //   comment: 'Sun setting in the horizon with waves lapping the shore.',
  //   user_id: 4,
  // },
  {
    game_id: 3,
    // filename: '06-fall-colors.jpg',
    comment:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
    user_id: 5,
  },
  {
    game_id: 3,
    // filename: '07-autumn-mountains.jpg',
    comment:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
    user_id: 2,
  },
  {
    game_id: 4,
    // filename: '08-frozen-river.jpg',
    comment:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
    user_id: 1,
  },
  {
    game_id: 4,
    // filename: '09-winter-home.jpg',
    comment:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
    user_id: 3,  
  },
];

const seedReviews = () => Review.bulkCreate(reviewsdata);

module.exports = seedReviews;
