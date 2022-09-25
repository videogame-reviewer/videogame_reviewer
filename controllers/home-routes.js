const router = require('express').Router();
const { Game, Review, User } = require('../models');
const withAuth = require('../utils/auth')

// GET all galleries for homepage
router.get('/', async (req, res) => {
  console.log('logged in? home',req.session.loggedIn);
  try {
    const dbGameData = await Game.findAll({
      // include: [
      //   {
      //     model: Reviews,
      //     attributes: ['description'],
      //   },
      // ],
    });

    const games = dbGameData.map((game) =>
      game.get({ plain: true })
    );

    res.render('homepage', {
      games,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/game/:id' ,async (req, res) => {
  console.log('logged in? one gameID',req.session.loggedIn);
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGameData = await Game.findByPk(req.params.id, {
        include: [
          {
            model: Review,
            attributes: [
              'comment',
            ],
          },
          // {
          //   model: User,
          //   attributes: [
          //     'username',
          //   ]
          // }
        ],
      });
      const game = dbGameData.get({ plain: true });
      res.render('game', { game, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log('random error');
      res.status(500).json(err);
    }
  }
);

// GET one painting
router.post('/game/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the painting
    try {
      const newReview = await Review.create({
        ...req.body,
        game_id: req.params.id,
        user_id: req.session.user_id,
      });
    res.status(200).json(newReview);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

router.get('/login', (req, res) => {
  console.log('logged in? are we ?',req.session.loggedIn);
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
