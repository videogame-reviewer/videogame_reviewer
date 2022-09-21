const router = require('express').Router();
const { Game, Reviews } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
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
router.get('/game/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGameData = await Game.findByPk(req.params.id, {
        // include: [
        //   {
        //     model: Reviews,
        //     attributes: [
        //       'id',
        //       'description',
        //     ],
        //   },
        // ],
      });
      const game = dbGameData.get({ plain: true });
      res.render('game', { game, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// GET one painting
router.get('/painting/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbPaintingData = await Painting.findByPk(req.params.id);

      const painting = dbPaintingData.get({ plain: true });

      res.render('painting', { painting, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
