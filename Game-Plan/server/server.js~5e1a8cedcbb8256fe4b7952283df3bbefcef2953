const express = require("express");
require("dotenv").config();
const {ApolloServer} = require("apollo-server")

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});


const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());