const { Game } = require('../models');

const gamedata = [
  {
    name: 'Minecraft',
    description: 'Minecraft is a 3-D computer game where players can build anything. The game which has been described as like an "online Lego" involves building blocks and creating structures across different environments and terrains. Set in a virtual world the game involves resource gathering, crafting items, building, and combat.',
    genres: 'Sandbox',
    link: 'https://www.minecraft.net/en-us',
    // filename: ''
  },
  {
    name: 'Super Smash Bros Ultimate',
    description: 'Super Smash Bros. Ultimate is a platform fighter for up to eight players in which characters from Nintendo games and other third-party franchises must try to knock each other out of an arena.',
    genres: 'Fighting, Platformer',
    link: 'https://www.gamestop.com/video-games/nintendo-switch/products/super-smash-bros.-ultimate---nintendo-switch/164255.html',
        // filename: ''
  },
  {
    name: 'Red Dead Redemption 2',
    description: 'Red Dead Redemption 2 is set in an open world consisting of five American regions, which the player can explore as they proceed with the story, and can be played through both third-person and first-person view. As Arthur Morgan, players can interact with the game world in several ways, including story missions, side quests, challenges, randomized events, and hunting. An Honor system, returning from the previous game, changes accordingly to the players actions towards non-player characters.',
    genres: 'Western, Action-adventure',
    link: 'https://www.gamestop.com/video-games/products/red-dead-redemption-2---xbox-one/136143.html',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Marvels Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker, under his superhero identity Spider-Man, through Manhattan, New York City to fight crime.',
    genres: 'Super Hero, Action-adventure',
    link: 'https://www.gamestop.com/video-games/playstation-4/products/marvels-spider-man-game-of-the-year-edition---playstation-4/205770.html',
        // filename: ''
  },
  {
    name: 'Fortnite',
    description: 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must to survive.',
    genres: 'Battle Royale',
    link: 'https://store.epicgames.com/en-US/p/fortnite',
        // filename: ''
  },
  {
    name: 'Grand Theft Auto V',
    description: 'The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centered on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the games online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.',
    genres: 'Action-Adventure',
    link: 'https://www.gamestop.com/video-games/products/grand-theft-auto-v---playstation-5/341252.html',
        // filename: ''
  },
  {
    name: 'Rocket League',
    description: 'Rocket League is a fantastic sport-based video game, developed by Psyonix (its soccer with cars). It features a competitive game mode based on teamwork and outmaneuvering opponents. Players work with their team to advance the ball down the field, and score goals in their opponents net.',
    genres: 'Sports, Cars',
    link: 'https://store.epicgames.com/en-US/p/rocket-league',
        // filename: ''
  },
  {
    name: 'Animal Crossing: New Horizons',
    description: 'The game follows a villager customized by the player, who, after purchasing a getaway package from Tom Nook, moves into a deserted island. After Tom Nook gives the player essentials, such as a tent, the game proceeds in a non-linear fashion, allowing the player to play the game as they choose.',
    genres: 'Life simulation game, Japanese role-playing game, Simulation Game',
    link: 'https://www.gamestop.com/video-games/nintendo-switch/products/animal-crossing-new-horizons---nintendo-switch/179366.html',
        // filename: ''
  },
  {
    name: 'Apex Legends',
    description: 'Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called "Legends", similar to those of hero shooters. Alternate modes have been introduced allowing for single and for two-player squads since the games release.',
    genres: 'Battle Royale, First-Person Shooter',
    link: 'https://www.ea.com/games/apex-legends',
        // filename: ''
  },
  {
    name: 'Roblox',
    description: 'What is Roblox? Roblox is a global platform where millions of people gather together every day to imagine, create, and share experiences in immersive, user-generated 3D worlds. The types of gameplay on Roblox are just as limitless as the imagination of the creators themselves.',
    genres: 'Sandbox, Any Genre',
    link: 'https://www.roblox.com/home',
        // filename: ''
  },
  {
    name: 'Overwatch',
    description: 'Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment. Described as a "hero shooter", Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as "heroes", with unique abilities.',
    genres: 'Action, First-Person Shooter',
    link: 'https://playoverwatch.com/en-us/',
        // filename: ''
  },
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    description: 'The game is an installment of The Legend of Zelda series and is set at the end of its timeline. No memories. After a 100-year slumber, Link wakes up alone in a world he no longer remembers. Now the legendary hero must explore a vast and dangerous land and regain his memories before Hyrule is lost forever. Armed only with what he can scavenge, Link sets out to find answers and the resources needed to survive.',
    genres: 'Open world, Action-adventure game, Action role-playing game, Nonlinear gameplay',
    link: 'https://www.gamestop.com/video-games/products/the-legend-of-zelda-breath-of-the-wild---nintendo-switch/142004.html',
        // filename: ''
  },
  {
    name: 'Super Mario Odyssey',
    description: 'Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as "Kingdoms" within the game, on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.',
    genres: 'Platform game, Action-adventure game',
    link: 'https://www.gamestop.com/video-games/nintendo-switch/products/super-mario-odyssey---nintendo-switch/141694.html',
        // filename: ''
  },
  {
    name: 'Counter-Strike: Global Offensive',
    description: 'Counter-Strike: Global Offensive (CS: GO) is a round-based, 5v5 tactical FPS with an Attackers vs. Defenders setup and no respawns, meaning if a player is eliminated they will not respawn until the next round. The game is available to download from the STEAM Games Client.',
    genres: 'Tactical shooter',
    link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/',
        // filename: ''
  },
  {
    name: 'League of Legends',
    description: 'What is League of Legends? League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the others base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.',
    genres: 'Multiplayer online battle arena, Action role-playing game',
    link: 'https://www.leagueoflegends.com/en-us/',
        // filename: ''
  },
  {
    name: 'Valorant',
    description: 'Valorant is a tactical shooting game involving two teams with 5 players on each team. Every player can sign in and play remotely from anywhere in the world. Every game has 25 rounds and the team that wins 13 of them first wins the game. Players can choose their in-game characters called agents at the start of the game.',
    genres: 'Tactical Shooter',
    link: 'https://playvalorant.com/',
        // filename: ''
  },
  {
    name: 'God of War (2018)',
    description: 'Many years after the events of God of War III, Kratos has ended up in the world of Norse in ancient Norway, in the realm of Midgard, and has a son named Atreus. After Kratos second wife and Atreus mother, Faye, passes away from an unknown cause, the two set out on a journey to fulfill her final wish of spreading her ashes at the highest peak of the nine realms, later revealed to be in Jötunheim. Along their journey, they are attacked by Baldur, who was sent by Odin to get to Faye to prevent Ragnarök, unaware she has died. After Kratos eventually kills Baldur, the three-year-long Fimbulwinter begins, with Ragnarök soon to follow, which was not supposed to occur for another hundred years. While Baldurs mother Freya swears revenge on Kratos, he and Atreus complete their journey and discover that Faye was a giant who had foreseen the future and chose to remain in Midgard; it is also revealed that Atreus was originally named Loki by his mother before Kratos renamed him in the memory of a former Spartan comrade. The game is a new direction for the series, not only by its new mythological setting but also by its gameplay. Kratos now prominently uses a magical battle axe called the Leviathan Axe instead of his iconic dual blades from the previous installments.',
    genres: 'Action-adventure game, Role-playing video game, Fighting game, Hack and slash, Adventure',
    link: 'https://www.gamestop.com/video-games/products/god-of-war---pc-steam/342177.html',
        // filename: ''
  },
  {
    name: 'Pokemon: Sword and Shield',
    description: 'he main objective of the games is to dethrone the Pokémon League Champion, Leon, in a tournament that various other Gym Leaders and rivals also take part in, whilst dealing with Team Yell and a nefarious conspiracy group within the League and land.',
    genres: 'Role-playing video game, Adventure game',
    link: 'https://www.gamestop.com/video-games/nintendo-switch/products/pokemon-sword---nintendo-switch/193024.html',
        // filename: ''
  },
  {
    name: 'Cuphead',
    description: 'The all-cartoon Magical Wonder game! Cuphead is a classic run-and-gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand-drawn cel animation, watercolor backgrounds, and original jazz recordings. Play as Cuphead or Mugman (in single-player or local co-op) as you traverse strange worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets while you try to pay your debt back to the devil!',
    genres: 'Action',
    link: 'https://www.gamestop.com/video-games/products/cuphead---nintendo-switch/199969.html',
        // filename: ''
  },
  {
    name: 'The Elder Scrolls V: Skyrim',
    description: 'The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first- or third-person perspective. The player may freely roam over the land of Skyrim, an open-world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages. Set in the eponymous province of Skyrim, the story follows the tale of the Dragonborn as they help solve the riddle of the sudden return of dragons and ultimately help decide the winners in the Civil War.',
    genres: 'Open world, Entertainment, Fantasy, MORE',
    link: 'https://www.gamestop.com/video-games/products/the-elder-scrolls-v-skyrim-anniversary-edition---playstation-4/316495.html',
        // filename: ''
  },
  {
    name: 'Assasins Creed Vallhalla',
    description: 'In Assassins Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of Englands Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla.',
    genres: 'Adventure game, Fighting game, Action role-playing game, Shooter game, Platform game',
    link: 'https://www.gamestop.com/video-games/products/assassins-creed-valhalla---xbox-one/227239.html',
        // filename: ''
  },
  {
    name: 'Splatoon 3',
    description: 'Enter the Splatlands, a sun-scorched desert inhabited by battle-hardened Inklings and Octolings. Splatsville, the city of chaos, is the adrenaline-fueled heart of this dusty wasteland. Even in this desolate environment, Turf War* reigns supreme, and battles rage in new stages located in the surrounding wilds. Dynamic new moves help these fighters dodge attacks and cover more ground, along with a new bow-shaped weapon to sling ink. Join Agent 3 in a fight against the unruly Octarians in story mode. Discover the secrets of Alterna, the Fuzzy Ooze, and how they connect to the modes theme, "Return of the Mammalians.” Team up and fend off waves of dangerous Salmonid bosses in the next iteration of Salmon Run*, a co-op mode with fresh new features.',
    genres: 'Third-person shooter',
    link: 'https://www.gamestop.com/video-games/nintendo-switch/products/splatoon-3---nintendo-switch/335585.html ',
        // filename: ''
  },
  {
    name: 'Luigi’s Mansion 3',
    description: 'Luigi’s invited to the towering Last Resort hotel, but when Mario and his friends go missing, our green-clad hero will have to conquer his fears to save them! Slam, blow away, and vacuum up ghosts with the all-new Poltergust G-00, and join forces with Gooigi to overcome the puzzling contraptions and mischievous boss on each themed floor. And that’s just the Last Resort. Enter the ScareScraper for 8-player local wireless** or online*** co-op gameplay.',
    genres: ' Action-Adventure',
    link: 'https://www.gamestop.com/video-games/nintendo-switch/products/luigis-mansion-3---nintendo-switch/207513.html',
        // filename: ''
  },
  {
    name: 'Destiny 2',
    description: 'Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardians look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.',
    genres: 'Action-Adventure',
    link: 'https://www.bungie.net/7/en/Destiny/NewLight?gclsrc=aw.ds&gclsrc=aw.ds&gclid=CjwKCAjwyaWZBhBGEiwACslQo9JH3XjR6wZr-RgYDDbHxnnie3YbbBM9IFMfwp3SerQmkQCfnGUzjhoCsyIQAvD_BwE&gclid=CjwKCAjwyaWZBhBGEiwACslQo9JH3XjR6wZr-RgYDDbHxnnie3YbbBM9IFMfwp3SerQmkQCfnGUzjhoCsyIQAvD_BwE&utm_source=adwords&utm_campaign=16723914648&utm_term=131962784861&utm_content=613409198602&utm_medium=_5651570&gsid=1ecf7132bd526504b90de265644a127e&gsc=1',
        // filename: ''
  },
  {
    name: 'Pokemon Legends: Arceus',
    description: 'Get ready for a new kind of grand, Pokémon adventure in Pokémon™ Legends: Arceus, a new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series. Your adventure takes place in the expansive natural majesty of the Hisui region, where you embark on survey missions from your main base in Jubilife Village.  Mount Coronet rises from the center, surrounded on all sides by areas with distinct environments. You are tasked with studying Pokémon to complete the regions first Pokédex. To do this, youll need to catch wild Pokémon by sneaking up and throwing a well-aimed Poké Ball™. You can also toss the Poké Ball containing your ally Pokémon near a wild Pokémon to seamlessly enter battle.',
    genres: 'Role-playing video game, Adventure game',
    link: 'https://www.gamestop.com/video-games/nintendo-switch/products/pokemon-legends-arceus---nintendo-switch/249435.html ',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
  {
    name: '',
    description: '',
    genres: '',
    link: '',
        // filename: ''
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
