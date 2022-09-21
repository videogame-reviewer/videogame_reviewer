const { User } = require('../models');

const usersdata = [
    {
      "username": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345"
    },
    {
      "username": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345"
    },
    {
        "username": "Ami",
        "email": "ami2k20@aol.com",
        "password": "password125"
      },
      {
        "username": "Amik",
        "email": "amik2k20@aol.com",
        "password": "password345"
      },
      {
        "username": "Am",
        "email": "am2k20@aol.com",
        "password": "password2345"
      }
  ]
  
const seedUsers = () => User.bulkCreate(usersdata);

module.exports = seedUsers;
