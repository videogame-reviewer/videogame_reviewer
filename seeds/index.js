const sequelize = require('../config/connection');
const seedGame = require('./gameData');
const seedReviews = require('./reviewsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGame();

  await seedReviews();

  process.exit(0);
};

seedAll();
