const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const root = require('./resolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL GUI
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
