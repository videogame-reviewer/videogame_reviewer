const { Review } = require('../models');

const reviewsdata = [
  {
    game_id: 39,
    comment:
      'Great Game loved the gameplay',
    user_id: 1,
    username: 'Sal'
  },
  {
    game_id: 39,
    comment: 'An all time classic!.',
    user_id: 2,
    username: 'Brandon'
  },
  {
    game_id: 39,
    comment: 'you gotta love batman games!',
    user_id: 4,
    username: 'Bob'
  },
  {
    game_id: 41,
    comment: 'i love the action its so upclose and fun',
    user_id: 2,
    username: 'Tony'
  },
  {
    game_id: 41,
    comment: 'the action sequences are great 10/10 game in my opinion',
    user_id: 2,
    username: 'Remy'
  },
  {
    game_id: 41,
    comment: 'THIS GAME IS AMAZING ITS MY LIFE',
    user_id: 2,
    username: 'SifuLover88'
  },
  {
    game_id: 49,
    comment:
      'I stay up endless hours playing this game! Most fun mario game in a long time!',
    user_id: 5,
    username: 'Sally'
  },
  {
    game_id: 49,
    comment:
      'Meh its okay, ive played better games',
    user_id: 5,
    username: 'Wood'
  },
  {
    game_id: 49,
    comment:
      'its an okay game, doesnt live up to the last game but its still really fun :D',
    user_id: 1,
    username: 'Lucy'
  },
  {
    game_id: 49,
    comment:
      'I LOVE PLAYING THIS GAME WITH FREINDS THEY MAKE THE BEST LEVELS GREAT GAME CANT STOP PLAYING IT',
    user_id: 3,  
    username: 'Britt'
  },
];

const seedReviews = () => Review.bulkCreate(reviewsdata);

module.exports = seedReviews;
