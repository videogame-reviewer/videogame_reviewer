const sequelize = require('../config/connection');
const seedGame = require('./gameData');
const seedReviews = require('./reviewsData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  
  await seedGame();

  await seedReviews();

  process.exit(0);
};

seedAll();
