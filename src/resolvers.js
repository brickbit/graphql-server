const db = require('./db');

const root = {
  cities: () => db.cities,
  city: (args) => {
    if (args.id !== undefined) {
      return db.cities.find(city => city.id == args.id);
    }
    return null;
  },
  places: () => db.places,
};

module.exports = root;