const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const db = require('../db');

const schema = buildSchema(`
  type Query {
    cities: [City]
    places: [Place]
  }

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
    place: PlaceDetail
  }

  type PlaceDetail {
    type: String
    name: String
    coordinates: [Float]
  }
`);

const root = {
  cities: () => db.cities,
  places: () => db.places,
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = app;
