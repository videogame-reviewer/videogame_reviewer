const { Game } = require('../models');

const gamedata = [
  {
    name: 'Printemps',
    description: 'Printemps',
    genres: 'RPG',
  },
  {
    name: 'Sommer',
    description: 'Sommer',
    genres: 'Adventure',
  },
  {
    name: 'Herfst',
    description: 'Herfst',
    genres: 'Sport',
  },
  {
    name: 'Invierno',
    description: 'Invierno',
    genres: 'Action',
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
