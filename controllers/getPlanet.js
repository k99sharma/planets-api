// planet information
const planetInformation = {
  mercury: {
    test: "mercury",
  },

  venus: {
    test: "venus",
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
