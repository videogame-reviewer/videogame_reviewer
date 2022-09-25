const User = require('./User');
const Game = require('./Game');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

// User.belongsToMany(Game, {
//   through: {model: Review},
// });

// Game.belongsToMany(User, {
//   through: {model: Review},
// });

Game.hasMany(Review, {
  foreignKey: 'game_id',
});

Review.belongsTo(Game, {
  foreignKey: 'game_id',
});


module.exports = { User, Game, Review };
