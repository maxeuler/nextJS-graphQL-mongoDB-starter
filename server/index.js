const { GraphQLServer } = require('graphql-yoga');
require('dotenv').config({ path: '.env' });
const db = require('./db');
const serverConfig = require('./server');

db(process.env.DATABASE);

const server = new GraphQLServer(serverConfig);

const options = {
  port: 4444,
  cors: {
    credentials: true,
    origin: 'http://localhost:7777',
  },
};

server.start(options, () =>
  console.log('🗽 🗽  Server is running on port 4444')
);
