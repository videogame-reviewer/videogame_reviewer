const { User } = require('../models');

const usersdata = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345"
    },
    {
        "name": "Ami",
        "email": "ami2k20@aol.com",
        "password": "password125"
      },
      {
        "name": "Amik",
        "email": "amik2k20@aol.com",
        "password": "password345"
      },
      {
        "name": "Am",
        "email": "am2k20@aol.com",
        "password": "password2345"
      }
  ]
  
const seedUsers = () => User.bulkCreate(usersdata);

module.exports = seedUsers;
