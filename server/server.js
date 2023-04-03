const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// server will hold the typeDefs, resolvers, and context needed to start the application. Playground and introspection were also added to get the /graphql endpoint to work.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  playground: true,
  introspection: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Directs the webpage to display /client/build/index.html when at the '/' endpoint.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})


// This is the function that will start the Apollo Server. 
async function startApolloServer(typeDefs, resolvers) {
  await server.start()
  server.applyMiddleware({app})
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}/`);
    })
  });
};

startApolloServer(typeDefs, resolvers);
