const { Game } = require('../models');

const gamedata = [
  {
    name: 'Minecraft',
    description: 'Minecraft is a 3-D computer game where players can build anything. The game which has been described as like an "online Lego" involves building blocks and creating structures across different environments and terrains. Set in a virtual world the game involves resource gathering, crafting items, building, and combat.',
    genre: 'Sandbox',
    purchaselink: 'https://www.minecraft.net/en-us',
    // filename: ''
  },
  {
    name: 'Super Smash Bros Ultimate',
    description: 'Super Smash Bros. Ultimate is a platform fighter for up to eight players in which characters from Nintendo games and other third-party franchises must try to knock each other out of an arena.',
    genre: 'Fighting Platformer',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/super-smash-bros.-ultimate---nintendo-switch/164255.html',
        // filename: ''
  },
  {
    name: 'Red Dead Redemption 2',
    description: 'Red Dead Redemption 2 is set in an open world consisting of five American regions, which the player can explore as they proceed with the story, and can be played through both third-person and first-person view. As Arthur Morgan, players can interact with the game world in several ways, including story missions, side quests, challenges, randomized events, and hunting. An Honor system, returning from the previous game, changes accordingly to the players actions towards non-player characters.',
    genre: 'Western Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/products/red-dead-redemption-2---xbox-one/136143.html',
        // filename: ''
  },
  {
    name: 'Spider-Man',
    description: 'Marvels Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker, under his superhero identity Spider-Man, through Manhattan, New York City to fight crime.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/playstation-4/products/marvels-spider-man-game-of-the-year-edition---playstation-4/205770.html',
        // filename: ''
  },
  {
    name: 'Fortnite',
    description: 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must to survive.',
    genre: 'Battle-Royale',
    purchaselink: 'https://store.epicgames.com/en-US/p/fortnite',
        // filename: ''
  },
  {
    name: 'Grand Theft Auto V',
    description: 'The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centered on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the games online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/products/grand-theft-auto-v---playstation-5/341252.html',
        // filename: ''
  },
  {
    name: 'Rocket League',
    description: 'Rocket League is a fantastic sport-based video game, developed by Psyonix (its soccer with cars). It features a competitive game mode based on teamwork and outmaneuvering opponents. Players work with their team to advance the ball down the field, and score goals in their opponents net.',
    genre: 'Sports',
    purchaselink: 'https://store.epicgames.com/en-US/p/rocket-league',
        // filename: ''
  },
  {
    name: 'Animal Crossing: New Horizons',
    description: 'The game follows a villager customized by the player, who, after purchasing a getaway package from Tom Nook, moves into a deserted island. After Tom Nook gives the player essentials, such as a tent, the game proceeds in a non-linear fashion, allowing the player to play the game as they choose.',
    genre: 'Life Simulation',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/animal-crossing-new-horizons---nintendo-switch/179366.html',
        // filename: ''
  },
  {
    name: 'Apex Legends',
    description: 'Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called "Legends", similar to those of hero shooters. Alternate modes have been introduced allowing for single and for two-player squads since the games release.',
    genre: 'Battle Royale',
    purchaselink: 'https://www.ea.com/games/apex-legends',
        // filename: ''
  },
  {
    name: 'Roblox',
    description: 'What is Roblox? Roblox is a global platform where millions of people gather together every day to imagine, create, and share experiences in immersive, user-generated 3D worlds. The types of gameplay on Roblox are just as limitless as the imagination of the creators themselves.',
    genre: 'Sandbox',
    purchaselink: 'https://www.roblox.com/home',
        // filename: ''
  },
  {
    name: 'Overwatch',
    description: 'Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment. Described as a "hero shooter", Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as "heroes", with unique abilities.',
    genre: 'First-Person Shooter',
    purchaselink: 'https://playoverwatch.com/en-us/',
        // filename: ''
  },
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    description: 'The game is an installment of The Legend of Zelda series and is set at the end of its timeline. No memories. After a 100-year slumber, purchaselink wakes up alone in a world he no longer remembers. Now the legendary hero must explore a vast and dangerous land and regain his memories before Hyrule is lost forever. Armed only with what he can scavenge, purchaselink sets out to find answers and the resources needed to survive.',
    genre: 'Open world-RPG',
    purchaselink: 'https://www.gamestop.com/video-games/products/the-legend-of-zelda-breath-of-the-wild---nintendo-switch/142004.html',
        // filename: ''
  },
  {
    name: 'Super Mario Odyssey',
    description: 'Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as "Kingdoms" within the game, on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.',
    genre: 'Platformer',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/super-mario-odyssey---nintendo-switch/141694.html',
        // filename: ''
  },
  {
    name: 'Counter-Strike: Global Offensive',
    description: 'Counter-Strike: Global Offensive (CS: GO) is a round-based, 5v5 tactical FPS with an Attackers vs. Defenders setup and no respawns, meaning if a player is eliminated they will not respawn until the next round. The game is available to download from the STEAM Games Client.',
    genre: 'Tactical Shooter',
    purchaselink: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/',
        // filename: ''
  },
  {
    name: 'League of Legends',
    description: 'What is League of Legends? League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the others base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.',
    genre: 'MOBA',
    purchaselink: 'https://www.leagueoflegends.com/en-us/',
        // filename: ''
  },
  {
    name: 'Valorant',
    description: 'Valorant is a tactical shooting game involving two teams with 5 players on each team. Every player can sign in and play remotely from anywhere in the world. Every game has 25 rounds and the team that wins 13 of them first wins the game. Players can choose their in-game characters called agents at the start of the game.',
    genre: 'Tactical Shooter',
    purchaselink: 'https://playvalorant.com/',
        // filename: ''
  },
  {
    name: 'God of War (2018)',
    description: 'Many years after the events of God of War III, Kratos has ended up in the world of Norse in ancient Norway, in the realm of Midgard, and has a son named Atreus. After Kratos second wife and Atreus mother, Faye, passes away from an unknown cause, the two set out on a journey to fulfill her final wish of spreading her ashes at the highest peak of the nine realms, later revealed to be in Jötunheim. Along their journey, they are attacked by Baldur, who was sent by Odin to get to Faye to prevent Ragnarök, unaware she has died. After Kratos eventually kills Baldur, the three-year-long Fimbulwinter begins, with Ragnarök soon to follow, which was not supposed to occur for another hundred years. While Baldurs mother Freya swears revenge on Kratos, he and Atreus complete their journey and discover that Faye was a giant who had foreseen the future and chose to remain in Midgard; it is also revealed that Atreus was originally named Loki by his mother before Kratos renamed him in the memory of a former Spartan comrade. The game is a new direction for the series, not only by its new mythological setting but also by its gameplay. Kratos now prominently uses a magical battle axe called the Leviathan Axe instead of his iconic dual blades from the previous installments.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/products/god-of-war---pc-steam/342177.html',
        // filename: ''
  },
  {
    name: 'Pokemon: Sword and Shield',
    description: 'he main objective of the games is to dethrone the Pokémon League Champion, Leon, in a tournament that various other Gym Leaders and rivals also take part in, whilst dealing with Team Yell and a nefarious conspiracy group within the League and land.',
    genre: 'Adventure-RPG',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/pokemon-sword---nintendo-switch/193024.html',
        // filename: ''
  },
  {
    name: 'Cuphead',
    description: 'The all-cartoon Magical Wonder game! Cuphead is a classic run-and-gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand-drawn cel animation, watercolor backgrounds, and original jazz recordings. Play as Cuphead or Mugman (in single-player or local co-op) as you traverse strange worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets while you try to pay your debt back to the devil!',
    genre: 'Action',
    purchaselink: 'https://www.gamestop.com/video-games/products/cuphead---nintendo-switch/199969.html',
        // filename: ''
  },
  {
    name: 'The Elder Scrolls V: Skyrim',
    description: 'The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first- or third-person perspective. The player may freely roam over the land of Skyrim, an open-world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages. Set in the eponymous province of Skyrim, the story follows the tale of the Dragonborn as they help solve the riddle of the sudden return of dragons and ultimately help decide the winners in the Civil War.',
    genre: 'Open Fantasy-World',
    purchaselink: 'https://www.gamestop.com/video-games/products/the-elder-scrolls-v-skyrim-anniversary-edition---playstation-4/316495.html',
        // filename: ''
  },
  {
    name: 'Assasins Creed Vallhalla',
    description: 'In Assassins Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of Englands Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/products/assassins-creed-valhalla---xbox-one/227239.html',
        // filename: ''
  },
  {
    name: 'Splatoon 3',
    description: 'Enter the Splatlands, a sun-scorched desert inhabited by battle-hardened Inklings and Octolings. Splatsville, the city of chaos, is the adrenaline-fueled heart of this dusty wasteland. Even in this desolate environment, Turf War* reigns supreme, and battles rage in new stages located in the surrounding wilds. Dynamic new moves help these fighters dodge attacks and cover more ground, along with a new bow-shaped weapon to sling ink. Join Agent 3 in a fight against the unruly Octarians in story mode. Discover the secrets of Alterna, the Fuzzy Ooze, and how they connect to the modes theme, "Return of the Mammalians.” Team up and fend off waves of dangerous Salmonid bosses in the next iteration of Salmon Run*, a co-op mode with fresh new features.',
    genre: 'Third-Person Shooter',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/splatoon-3---nintendo-switch/335585.html ',
        // filename: ''
  },
  {
    name: 'Luigi’s Mansion 3',
    description: 'Luigi’s invited to the towering Last Resort hotel, but when Mario and his friends go missing, our green-clad hero will have to conquer his fears to save them! Slam, blow away, and vacuum up ghosts with the all-new Poltergust G-00, and join forces with Gooigi to overcome the puzzling contraptions and mischievous boss on each themed floor. And that’s just the Last Resort. Enter the ScareScraper for 8-player local wireless** or online*** co-op gameplay.',
    genre: ' Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/luigis-mansion-3---nintendo-switch/207513.html',
        // filename: ''
  },
  {
    name: 'Destiny 2',
    description: 'Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardians look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.bungie.net/7/en/Destiny/NewLight?gclsrc=aw.ds&gclsrc=aw.ds&gclid=CjwKCAjwyaWZBhBGEiwACslQo9JH3XjR6wZr-RgYDDbHxnnie3YbbBM9IFMfwp3SerQmkQCfnGUzjhoCsyIQAvD_BwE&gclid=CjwKCAjwyaWZBhBGEiwACslQo9JH3XjR6wZr-RgYDDbHxnnie3YbbBM9IFMfwp3SerQmkQCfnGUzjhoCsyIQAvD_BwE&utm_source=adwords&utm_campaign=16723914648&utm_term=131962784861&utm_content=613409198602&utm_medium=_5651570&gsid=1ecf7132bd526504b90de265644a127e&gsc=1',
        // filename: ''
  },
  {
    name: 'Pokemon Legends: Arceus',
    description: 'Get ready for a new kind of grand, Pokémon adventure in Pokémon™ Legends: Arceus, a new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series. Your adventure takes place in the expansive natural majesty of the Hisui region, where you embark on survey missions from your main base in Jubilife Village.  Mount Coronet rises from the center, surrounded on all sides by areas with distinct environments. You are tasked with studying Pokémon to complete the regions first Pokédex. To do this, youll need to catch wild Pokémon by sneaking up and throwing a well-aimed Poké Ball™. You can also toss the Poké Ball containing your ally Pokémon near a wild Pokémon to seamlessly enter battle.',
    genre: 'Adventure-RPG',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/pokemon-legends-arceus---nintendo-switch/249435.html ',
        // filename: ''
  },
  {
    name: 'Genshin Impact',
    description: 'The game features a fantasy open-world environment and action-based combat system using elemental magic, character switching, and gacha monetization system for players to obtain new characters, weapons, and other resources. The game can only be played with an internet connection and features a limited multiplayer mode allowing up to four players in a world. A pair of "star traveler" twins who visit different worlds arrive in the world of Teyvat and witness the destruction of the nation of Khaenri ah. While attempting to flee the chaos, an unnamed god blocks their path and separates them: she captures one and seals away the power of the other. The sealed twin (known as the "Traveler") awakens five hundred years later and meets Paimon, who becomes their companion. For months, they travel together and then make their way to Mondstadt. There, they begin the search for the Travelers missing sibling.',
    genre: 'Action-RPG',
    purchaselink: 'https://genshin.hoyoverse.com/en/download',
        // filename: ''
  },
  {
    name: 'Elden Ring',
    description: '.Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats awaits you, leading to a high sense of accomplishment. A multilayered story told in fragments. An epic drama in which the various thoughts of the characters intersect in the Lands Between.',
    genre: 'Action-RPG',
    purchaselink: 'https://www.gamestop.com/video-games/products/elden-ring---playstation-5/297831.html',
        // filename: ''
  },
  {
    name: 'Mario Kart 8 Deluxe',
    description: 'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!',
    genre: 'Multiplayer Racer',
    purchaselink: 'https://www.gamestop.com/video-games/products/mario-kart-8-deluxe---nintendo-switch/141784.html',
        // filename: ''
  },
  {
    name: 'The Witcher 3',
    description: 'The Witcher: Wild Hunt is a story-driven open-world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.',
    genre: 'Action-Adventure RPG',
    purchaselink: 'https://www.gamestop.com/video-games/products/the-witcher-iii-wild-hunt---xbox-one/111869.html',
        // filename: ''
  },
  {
    name: 'Fallout 4',
    description: 'As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.',
    genre: 'Adventure-RPG',
    purchaselink: 'https://www.gamestop.com/video-games/products/fallout-4-game-of-the-year-edition---xbox-one/154029.html',
        // filename: ''
  },
  {
    name: 'Fallout 76?',
    description: 'Bethesda Game Studios, the award-winning creators of Skyrim and Fallout 4, welcome you to Fallout 76. Twenty-five years after the bombs fell, you and your fellow Vault Dwellers—chosen from the nations best and brightest emerge into post-nuclear America on Reclamation Day, 2102. Play solo or join together as you explore, quest, build, and triumph against the wastelands greatest threats. Explore a vast wasteland, devastated by nuclear war, in this open-world multiplayer addition to the Fallout story. Experience the largest, most dynamic world ever created in the legendary Fallout universe. Expeditions: The Pitt is the next major content update for Fallout 76. Travel beyond the borders of Appalachia to The Pitt a grim industrial wasteland crippled by conflict and awash with radiation. You will assist the Union, a fledgling band of freedom fighters in a desperate attempt to reclaim their home from a power-hungry raider faction known as the Fanatics. Forge new alliances, undertake new challenges, and earn all-new rewards when Expeditions: The Pitt launches free for all Fallout 76 players.',
    genre: 'Adventure-RPG',
    purchaselink: 'https://www.gamestop.com/video-games/products/fallout-76---playstation-4/184790.html',
        // filename: ''
  },
  {
    name: 'Call of Duty: Black ops 2',
    description: 'Pushing the boundaries of what fans have come to expect from the record-setting entertainment franchise, Call of Duty®: Black Ops II propels players into a near future, 21st Century Cold War, where technology and weapons have converged to create a new generation of warfare.',
    genre: 'First-Person Shooter',
    purchaselink: 'https://store.steampowered.com/app/202970/call_of_duty_black_ops_ii/',
        // filename: ''
  },
  {
    name: 'Stardew Valley',
    description: 'Youve inherited your grandfathers old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It wont be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the towns most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!',
    genre: 'RPG-Simulation',
    purchaselink: 'https://www.gamestop.com/video-games/products/stardew-valley/158455.html',
        // filename: ''
  },
  {
    name: 'The Sims 4',
    description: 'The Sims 4 is a 2014 social simulation game developed by Maxis and published by Electronic Arts. It is the fourth major title in The Sims series and is the sequel to The Sims 3 (2009). The Sims 4 was announced on May 6, 2013, and released in September 2014 for Microsoft Windows; versions for macOS, PlayStation 4, and Xbox One were subsequently released in 2015 and 2017. The game will go free-to-play in October 2022. The Sims 4 focuses on its improved character creation and housebuilding tools, as well as deeper in-game simulation with the new emotion and personality systems for Sims. The Sims 4 has received many paid downloadable content packs since its release, including twelve expansion packs and twelve "game packs". The most recent expansion pack is High School Years, released on July 28, 2022. Additionally, many free updates have been released throughout the games lifespan that includes major features and additions to the game, such as the addition of swimming pools, character customization options, and terrain tools.',
    genre: 'Life Simulation',
    purchaselink: 'https://www.gamestop.com/video-games/products/the-sims-4---pc-origin/108665.html',
        // filename: ''
  },
  {
    name: 'Terraria',
    description: 'Terraria is a land of adventure! A land of mystery! A land thats yours to shape, defend, and enjoy. Your options in Terraria are limitless. Are you an action gamer with an itchy trigger finger? A master builder? A collector? An explorer? Theres something for everyone. Start by building basic shelter, then dig for ore and other resources. Discover and craft over 500 weapons of magic, ranged, melee, and summon varieties, as well as armor, and use them to battle hundreds of different enemies. Soon youll be going head-to-head with any of a dozen enormous bosses. Go fishing, ride a mount, find Floating Islands, build houses for helpful NPCs, and much, much more.',
    genre: 'Action-Adventure Sandbox',
    purchaselink: 'https://www.gamestop.com/video-games/products/terraria---xbox-one/107880.html',
        // filename: ''
  },
  {
    name: 'Dragon Quest XI',
    description: 'You are the Luminary, the hunted hero who will protect the land from destruction in the latest RPG from the iconic DRAGON QUEST® series. With a ragtag band of adventurers, youll engage in well-balanced, turn-based battles and embark on quests across the kingdom of Erdrea. Forge gear, develop party members skills, and alter their outfits without changing gear in this edition of the game! This version also lets you ride and attack with monsters on the field to earn experience points, as well as change between HD or 16-bit visuals, symphonic or synth music, and English or Japanese audio. Complete the tale with new character-focused stories, and travel to past DRAGON QUEST worlds! Across the land, youll meet the mysterious Tockles—creatures that allow you to visit 2D, 16-bit versions of areas from popular entries in the series like DRAGON QUEST IV and DRAGON QUEST VIII! Its fun to see these classic worlds reimagined in retro style, meshing perfectly with the main games 2D mode. Like all past DRAGON QUEST games, this ones character designs are based on the signature style of famed artist Akira Toriyama. Paired with the voiced dialogue, the rich personalities of your most loyal companions and fiercest enemies are brought to life, so you can fully immerse yourself in this quest to discover the Luminarys true heritage and awaken your power. For a greater challenge, start the game with the Draconian Quest setting, and capture your favorite moments with Photo Mode!',
    genre: 'Role-Playing',
    purchaselink: 'https://www.gamestop.com/video-games/products/dragon-quest-xi-s-echoes-of-an-elusive-age-definitive-edition---nintendo-switch/206000.html',
        // filename: ''
  },
  {
    name: 'The Last of Us',
    description: 'Experience the emotional storytelling and unforgettable characters in The Last of Us, winner of over 200 Game of the Year awards.In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey. ',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/playstation-5/products/the-last-of-us-part-1-playstation-5/344866.html',
        // filename: ''
  },
  {
    name: 'Persona 5 Royal',
    description: 'Persona 5[a] is a 2016 role-playing video game developed by Atlus. It takes place in modern-day Tokyo and follows a high school student known by the pseudonym Joker who transfers to a new school after being falsely accused of assault and put on probation. Over the course of a school year, he and other students awaken to a special power, becoming a group of secret vigilantes known as the Phantom Thieves of Hearts. They explore the Metaverse, a supernatural realm born from humanitys subconscious desires, to steal malevolent intent from the hearts of adults. As with previous games in the series, the party battles enemies known as Shadows using physical manifestations of their psyche known as their Personas. The game incorporates role-playing and dungeon crawling elements alongside social simulation scenarios.',
    genre: 'Role-Playing',
    purchaselink: 'https://www.gamestop.com/video-games/products/persona-5-royal-steelbook---playstation-5/351919.html',
        // filename: ''
  },
  {
    name: 'Batman: Arkham Knight',
    description: 'The Epic Conclusion to Rocksteady’s Arkham Trilogy Batman: Arkham Knight brings all-out war to Gotham City. The hit-and-run skirmishes of Batman: Arkham Asylum, which escalated into the devastating conspiracy against the inmates in Batman: Arkham City, culminating in the ultimate showdown for the future of Gotham. At the mercy of Scarecrow, the fate of the city hangs in the balance as he is joined by the Arkham Knight, a completely new and original character in the Batman universe, as well as a huge roster of other infamous villains including Harley Quinn, The Penguin, Two-Face and the Riddler. “Be The Batman” Live the complete Batman experience as the Dark Knight enters the concluding chapter of Rocksteady’s Arkham trilogy. Players will become The World’s Greatest Detective like never before with the introduction of the Batmobile and enhancements to signature features such as FreeFlow Combat, stealth, forensics, and navigation. Explore the entirety of Gotham City For the first time, players have the opportunity to explore all of Gotham City in a completely open and free-roaming game world. More than five times that of Batman: Arkham City, Gotham City has been brought to life with the same level of intimate, hand-crafted attention to detail for which the Arkham games are known.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/products/batman-arkham-knight---playstation-4/112606.html',
        // filename: ''
  },
  {
    name: 'Stray',
    description: 'Lost, alone, and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city. Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. Roam surroundings high and low, defend against unforeseen threats, and solve the mysteries of this unwelcoming place inhabited by curious droids and dangerous creatures. See the world through the eyes of a cat and interact with the environment in playful ways. Be stealthy, nimble, silly, and sometimes as annoying as possible with the strange inhabitants of this mysterious world. Along the way, the cat befriends a small flying drone, known only as B-12. With the help of this newfound companion, the duo must find a way out. Stray is developed by BlueTwelve Studio, a small team from the south of France mostly made up of cats and a handful of humans.',
    genre: 'Adventure',
    purchaselink: 'https://store.steampowered.com/app/1332010/Stray/',
        // filename: ''
  },
  {
    name: 'Sifu',
    description: 'Sifu is the story of a young Kung Fu student on a path of revenge, hunting for the murderers of his family. One against all, he has no allies and countless enemies. He has to rely on his unique mastery of Kung Fu as well as a mysterious pendant to prevail and preserve his family’s legacy. The hunt for your enemies will take you through the hidden corners of the city, from the gang-ridden suburbs to the cold hallways of the corporate towers. You have got one day, and countless enemies on your way. For every mistake, time will be the price to pay. Careful positioning and clever use of the environment to your advantage are key to your survival. Use everything at your disposal: throwable objects, makeshift weapons, windows, and ledges... The odds are stacked against you, and you will be offered no mercy. Kung Fu is mastery through practice, a path for both the body and the mind. Learn from your errors, unlock unique skills, and find the strength within yourself to master the devastating techniques of Pak-Mei Kung-Fu.',
    genre: 'Action-Adventure Fighter',
    purchaselink: 'https://www.gamestop.com/video-games/products/sifu-vengeance-edition---playstation-5/335575.html',
        // filename: ''
  },
  {
    name: 'Xenoblade Chronicles 3',
    description: 'The game takes place in Aionios, where two warring nations, Keves and Agnus, engage in perpetual war with soldiers with ten-year lifespans. The story follows Noah and his two childhood friends, Lanz and Eunie from Keves, and Mio and her two fellow servicemen Taion and Sena from Agnus, who all gain a mysterious power and decide to cooperate to find safety. Through this journey, they uncover the mystery behind this perpetual war and the nature of their world.',
    genre: 'Action Role-Playing',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/xenoblade-chronicles-3---nintendo-switch/335592.html',
        // filename: ''
  },
  {
    name: 'Forza Horizons 5',
    description: 'Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars. Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars. Explore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons, and a towering snow-capped volcano. Immerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions. Take on awe-inspiring weather events such as towering dust storms and intense tropical storms as Mexico’s unique, dynamic seasons change the world every week. Keep coming back for new events, challenges, collectibles, rewards, and new areas to explore. No two seasons will ever be the same.',
    genre: 'Racing',
    purchaselink: 'https://www.gamestop.com/video-games/xbox-one/products/forza-horizon-5---xbox-series-x/298223.html ',
        // filename: ''
  },
  {
    name: 'It Takes 2',
    description: 'Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend’s Pass and work together across a huge variety of gleefully disruptive gameplay challenges. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship. Master unique and connected character abilities at every new level. Help each other across an abundance of unexpected obstacles and laugh-out-loud moments. Kick gangster squirrels’ furry tails, pilot a pair of underpants, DJ a buzzing nightclub, and bobsleigh through a magical snow globe. Embrace a heartfelt and hilarious story where narrative and gameplay weave into a uniquely metaphorical experience. It Takes Two is developed by the award-winning studio Hazelight, the industry leader in cooperative play. They’re about to take you on a wild and wondrous ride where only one thing is for certain: we’re better together.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/products/it-takes-two---nintendo-switch/351936.html',
        // filename: ''
  },
  {
    name: 'Far Cry 6',
    description: 'Welcome to Yara, a tropical paradise frozen in time. Far Cry® 6 thrusts players into the adrenaline-filled world of a modern-day guerrilla revolution. As dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, dutifully at his side. Become a guerrilla fighter and burn their regime to the ground. The game is set on the fictional Caribbean island of Yara, ruled as a dictatorship by "El Presidente" Antón Castillo (portrayed by Giancarlo Esposito) who is raising his son Diego (Anthony Gonzalez) to follow in his rule. Players take on the role of guerilla fighter Dani Rojas (voiced by either Nisa Gunduz or Sean Rey), attempting to topple Castillo and his regime. The gameplay focuses on combat and exploration; players fight enemy soldiers and dangerous wildlife using a wide array of weapons and gadgets. The game features many elements found in role-playing games, such as a leveling-up system and side quests. It also features a cooperative multiplayer mode.',
    genre: 'First-Person Shooter',
    purchaselink: 'https://www.gamestop.com/video-games/products/far-cry-6---xbox-series-x/305603.html',
        // filename: ''
  },
  {
    name: 'Horizon Zero Dawn',
    description: 'EARTH IS OURS NO MORE. Experience Aloy’s entire legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her past, discover her destiny… and stop a catastrophic threat to the future. Unleash devastating, tactical attacks against unique Machines and rival tribes as you explore an open world teeming with wildlife and danger. Horizon Zero Dawn™ is a multi-award-winning action role-playing game.',
    genre: 'Action-Adventure RPG',
    purchaselink: 'https://www.gamestop.com/video-games/products/horizon-zero-dawn---playstation-4/141998.html',
        // filename: ''
  },
  {
    name: 'Horizon Forbidden West',
    description: 'Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon. The land is dying. Vicious storms and an unstoppable blight ravage the scattered remnants of humanity, while fearsome new machines prowl their borders. Life on Earth is hurtling towards another extinction, and no one knows why. ts up to Aloy to uncover the secrets behind these threats and restore order and balance to the world. Along the way, she must reunite with old friends, forge alliances with warring new factions and unravel the legacy of the ancient past all the while trying to stay one step ahead of a seemingly undefeatable new enemy.',
    genre: 'Action-Adventure RPG',
    purchaselink: 'https://www.gamestop.com/video-games/products/horizon-forbidden-west-launch-edition---playstation-5/324796.html',
        // filename: ''
  },
  {
    name: 'Star Wars Jedi: Fallen Order',
    description: 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a new third-person action-adventure title from Respawn Entertainment. This narratively driven, single-player game puts you in the role of a Jedi Padawan who narrowly escaped the purge of Order 66 following the events of Episode 3: Revenge of the Sith. On a quest to rebuild the Jedi Order, you must pick up the pieces of your shattered past to complete your training, develop new powerful Force abilities and master the art of the iconic lightsaber - all while staying one step ahead of the Empire and its deadly Inquisitors. While mastering your abilities, players will engage in cinematically charged lightsaber and Force combat designed to deliver the kind of intense Star Wars lightsaber battles as seen in the films. Players will need to approach enemies strategically, sizing up strengths and weaknesses while cleverly utilizing your Jedi training to overcome your opponents and solve the mysteries that lay in your path. Star Wars fans will recognize iconic locations, weapons, gear, and enemies while also meeting a roster of fresh characters, locations, creatures, droids, and adversaries new to Star Wars. As part of this authentic Star Wars story, fans will delve into a galaxy recently seized by the Empire. As a Jedi hero-turned-fugitive, players will need to fight for survival while exploring the mysteries of a long-extinct civilization all in an effort to rebuild the remnants of the Jedi Order as the Empire seeks to erase the Jedi completely.',
    genre: 'Action-Adventure',
    purchaselink: 'https://www.gamestop.com/video-games/products/star-wars-jedi-fallen-order---playstation-5/296935.html',
        // filename: ''
  },
  {
    name: 'Super Mario Maker 2',
    description: 'Mario fans of the world, unite! Now you can play, create, and share* the side-scrolling Super Mario™ courses of your dreams in the Super Mario Maker™ 2 game, available exclusively on the Nintendo Switch™ system! Dive into the single-player Story Mode and play built-in courses to rebuild Princess Peach’s castle. Make your own courses, alone or together. And with a Nintendo Switch Online membership*, share your courses, access a near-endless supply made by others, enjoy online multiplayer, and more! A new side-scrolling Mario adventure that unleashes the creative potential of Super Mario Maker 2 awaits in Story Mode, which contains over 100 built-in courses. And in Course Maker, a wide range of parts, tools, and more are available so you can construct your own courses. Want coin-shooting cannons? Bowser riding on a giant Goomba? Cat Mario sliding down slopes to take out an army of baddies? Go for it! You call the shots. Pass a Joy-Con™ controller to a partner to build cooperatively on a single system!',
    genre: 'Platformer',
    purchaselink: 'https://www.gamestop.com/video-games/nintendo-switch/products/super-mario-maker-2---nintendo-switch/199535.html',
        // filename: ''
  },
  {
    name: 'Hollow Knight',
    description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style. Explore twisting caverns, ancient cities, and deadly wastes; battle tainted creatures and befriend bizarre bugs, and solve ancient mysteries at the kingdoms heart.',
    genre: 'Metroidvania',
    purchaselink: 'https://www.gamestop.com/video-games/products/hollow-knight/175902.html',
        // filename: ''
  },
];

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;
