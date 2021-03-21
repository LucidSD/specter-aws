const dotenv = require('dotenv');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
// const ExpressRedisCache = require('express-redis-cache')
const logger = require('./utils/loggerHelpers');

dotenv.config();
const { typeDefs } = require('./types');
const { resolvers } = require('./resolvers')
// const cache = ExpressRedisCache({
//   expire: 30, // optional: expire every 10 seconds
// })

 
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: { requireResolversForResolveType: false }
  });
  // const movieRoute = require('./routes/movieRoute');
  // const panelRoute = require('./routes/panelRoute');
  // const searchRoute = require('./routes/searchRoute');
  // const testRoute = require('./routes/testRoute')
  
  const app = express();
  
  app.use(express.json());
  // app.use('/panel',  cache.route(), panelRoute);
  // app.use('/movie',  cache.route(), movieRoute);
  
  // app.use('/panel', panelRoute);
  // app.use('/movie', movieRoute);
  // app.use('/search', searchRoute);
  // app.use('/test', testRoute);
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));
  // app.get('/', greet);

  logger.info('starting server');
  const port = process.env.PORT || 3000;
  const server = app.listen(port, () => {
    logger.info(`Listening: http://localhost:${port}`);
  });

  // app.use(morgan('dev'));
  
  // app.use(middlewares.notFound);
  // app.use(middlewares.errorHandler);

  process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
    });
  });

module.exports = server;