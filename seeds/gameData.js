const { Game } = require('../models');

const gamedata = [
  {
    name: 'Minecraft',
    description: 'Minecraft is a 3-D computer game where players can build anything. The game which has been described as like an "online Lego" involves building blocks and creating structures across different environments and terrains. Set in a virtual world the game involves resource gathering, crafting items, building, and combat.',
    genres: 'Sandbox',
    // filename: ''
  },
  {
    name: 'Super Smash Bros Ultimate',
    description: 'Super Smash Bros. Ultimate is a platform fighter for up to eight players in which characters from Nintendo games and other third-party franchises must try to knock each other out of an arena.',
    genres: 'Fighting, Platformer',
        // filename: ''
  },
  {
    name: 'Red Dead Redemption 2',
    description: 'Red Dead Redemption 2 is set in an open world consisting of five American regions, which the player can explore as they proceed with the story, and can be played through both third-person and first-person view. As Arthur Morgan, players can interact with the game world in several ways, including story missions, side quests, challenges, randomized events, and hunting. An Honor system, returning from the previous game, changes accordingly to the players actions towards non-player characters.',
    genres: 'Western, Action-adventure',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Marvels Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker, under his superhero identity Spider-Man, through Manhattan, New York City to fight crime.',
    genres: 'Super Hero, Action-adventure',
        // filename: ''
  },
  {
    name: 'Fortnite',
    description: 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must to survive.',
    genres: 'Battle Royale',
        // filename: ''
  },
  {
    name: 'Grand Theft Auto V',
    description: 'The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centered on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the games online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.',
    genres: 'Action-Adventure',
        // filename: ''
  },
  {
    name: 'Rocket League',
    description: 'Rocket League is a fantastic sport-based video game, developed by Psyonix (its soccer with cars). It features a competitive game mode based on teamwork and outmaneuvering opponents. Players work with their team to advance the ball down the field, and score goals in their opponents net.',
    genres: 'Sports, Cars',
        // filename: ''
  },
  {
    name: 'Animal Crossing: New Horizons',
    description: 'The game follows a villager customized by the player, who, after purchasing a getaway package from Tom Nook, moves into a deserted island. After Tom Nook gives the player essentials, such as a tent, the game proceeds in a non-linear fashion, allowing the player to play the game as they choose.',
    genres: 'Life simulation game, Japanese role-playing game, Simulation Game',
        // filename: ''
  },
  {
    name: 'Apex Legends',
    description: 'Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called "Legends", similar to those of hero shooters. Alternate modes have been introduced allowing for single and for two-player squads since the games release.',
    genres: 'Battle Royale, First-Person Shooter',
        // filename: ''
  },
  {
    name: 'Roblox',
    description: 'What is Roblox? Roblox is a global platform where millions of people gather together every day to imagine, create, and share experiences in immersive, user-generated 3D worlds. The types of gameplay on Roblox are just as limitless as the imagination of the creators themselves.',
    genres: 'Sandbox, Any Genre',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Invierno',
    genres: 'Action',
        // filename: ''
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
