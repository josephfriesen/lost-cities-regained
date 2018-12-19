const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const GameFunctions = require('./resolvers/GameFunctions');

const resolvers = {
  Query, Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/lost-cities-regained/lost-cities/dev',
      secret: 'shhhitsasecret8888',
      debug: true
    })
  })
});

server.start(() => console.log('Server is running on http://localhost:4000, babyyyyyyy'));
