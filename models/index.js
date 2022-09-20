const User = require('./User');
const Game = require('./Game');
const Reviews = require('./Reviews');

Game.hasMany(Reviews, {
  foreignKey: 'reviews_id',
});

Reviews.belongsTo(Game, {
  foreignKey: 'game_id',
});

Reviews.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Game, Reviews };
