const models = require('./models/index');
const resolvers = require('./resolvers');
const gqlLoader = require('./utils/gqlLoader');

module.exports = {
  typeDefs: [gqlLoader('types.graphql'), gqlLoader('app.graphql')],
  resolvers,
  context: {
    models: {
      ...models,
    },
  },
};
