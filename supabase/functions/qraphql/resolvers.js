const db = require('./db');

const root = {
  cities: () => db.cities,
  places: () => db.places,
};

module.exports = root;