const sequelize = require('../config/connection');
const seedGames = require('./gameData');
const seedReviews = require('./reviewsData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGames();
  
  await seedUsers();

  await seedReviews();

  process.exit(0);
};

seedAll();
