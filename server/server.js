const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();

  server.applyMiddleware({ app });
  console.log(`Use GraphQl at https://localhost:${PORT}${server.graphqlPath}`);
};

app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

startApolloServer(typeDefs, resolvers);
