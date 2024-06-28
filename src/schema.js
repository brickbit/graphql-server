const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type City {
    id: Int
    key: String
    name: String
    nativeName: String
    currency: String
    language: String
  }

  type Place {
    key: String
    place: PlaceDetails
  }

  type PlaceDetails {
    type: String
    name: String
    coordinates: [Float]
  }

  type Query {
    cities: [City]
    city(id: Int): City
    places: [Place]
  }
`);

module.exports = schema;