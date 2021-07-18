// planet information
const planetInformation = {
  mercury: {
    name: "Mercury",
    tagline: "Terrestrial Planet",
    tagline_icon: "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
    description:
      "Mercury is the smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. It is the closest planet to the Sun. Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon.",
    distanceFromSun: "36 million miles",
    yearLength: "88",
    numberOfMoons: 0,
    namesake: "ROMAN GOD OF SPEED",
    rings: {
      url_exists: false,
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },

  venus: {
    name: "Venus",
    tagline: "Terrestrial Planet",
    tagline_icon: "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg",
    description:
      "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. Venus rotates on its axis backward, compared to most of the other planets in the solar system. Venus was the first planet to be explored by a spacecraft. Venus has a solid surface covered in dome-like volcanoes, rifts, and mountains, with expansive volcanic plains and vast, ridged plateaus.",
    distanceFromSun: "67 million miles",
    yearLength: "225",
    numberOfMoons: 0,
    namesake: "ROMAN GODDESS OF LOVE",
    rings: {
      url_exists: false,
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },

  earth: {
    name: "Earth",
    tagline: "Terrestrial Planet",
    tagline_icon: "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg",
    description:
      "Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70 percent of Earth's surface. Earth's atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up before they can hit the surface.",
    distanceFromSun: "93 million miles",
    yearLength: "365",
    numberOfMoons: 1,
    namesake: "VARIATION OF 'THE GROUNDED' IN MANY LANGUAGES",
    rings: {
      url_exists: false,
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },

  mars: {
    name: "Mars",
    tagline: "Terrestrial Planet",
    tagline_icon: "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_mars.jpg",
    description:
      "Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.",
    distanceFromSun: "142 million miles",
    yearLength: "687",
    numberOfMoons: 2,
    namesake: "ROMAN GOD OF WAR",
    rings: {
      url_exists: false,
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },

  jupiter: {
    name: "Jupiter",
    tagline: "Gas Giant",
    tagline_icon: "https://img.icons8.com/ios-glyphs/30/ffffff/planet.png",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg",
    description:
      "Jupiter is the biggest planet in our solar system. It's similar to a star, but it never got big enough to start burning. Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they're too faint to see very well.",
    distanceFromSun: "484 million miles",
    yearLength: "4,333",
    numberOfMoons: 75,
    namesake: "KING OF THE ROMAN GODS",
    rings: {
      url_exists: false,
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },

  saturn: {
    name: "Saturn",
    tagline: "Gas Giant",
    tagline_icon: "https://img.icons8.com/ios-glyphs/30/ffffff/planet.png",
    picture:
      "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_saturn.jpg",
    description:
      "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Saturn is a gas-giant planet and therefore does not have a solid surface like Earth’s. Saturn has the most spectacular ring system, with seven rings and several gaps and divisions between them. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.",
    distanceFromSun: "886 million miles",
    yearLength: "10,759",
    numberOfMoons: 82,
    namesake: "FATHER OF JUPITER",
    rings: {
      url_exists: true,
      url: "https://www.solarsystemscope.com/textures/download/2k_saturn_ring_alpha.png",
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },

  uranus: {
    name: "Uranus",
    tagline: "Ice Giant",
    tagline_icon: "https://img.icons8.com/ios-glyphs/30/ffffff/snowflake.png",
    picture: "https://space-facts.com/wp-content/uploads/uranus-v2.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_uranus.jpg",
    description:
      "Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue. Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see. Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.",
    distanceFromSun: "1.8 billion miles",
    yearLength: "30,687",
    numberOfMoons: 27,
    namesake: "GREEK GOD OF THE SKY",
    rings: {
      url_exists: false,
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },

  neptune: {
    name: "Neptune",
    tagline: "Ice Giant",
    tagline_icon: "https://img.icons8.com/ios-glyphs/30/ffffff/snowflake.png",
    picture: "https://cdn.mos.cms.futurecdn.net/eNTJrysq4A6DqXncBtsRrB.jpg",
    textureUrl:
      "https://www.solarsystemscope.com/textures/download/2k_neptune.jpg",
    description:
      "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they're very hard to see.",
    distanceFromSun: "2.8 billion miles",
    yearLength: "60,190",
    numberOfMoons: 14,
    namesake: "ROMAN GOD OF THE SEA",
    rings: {
      url_exists: false,
    },
    spaceTexture_url:
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  },
};

// getPlanet route callback function
exports.getPlanetController = (req, res) => {
  const { name } = req.query;

  let refactored_name = name.trim(); // removing any trailing white spaces
  refactored_name = refactored_name.toLowerCase(); // converting to lowercase letters

  // getting planet data
  const planetData = planetInformation[refactored_name];

  if (planetData) {
    res.statusCode = 200;
    res.send(planetData);
  } else {
    res.statusCode = 404;
    res.send({ error: "Not found!" });
  }
};
