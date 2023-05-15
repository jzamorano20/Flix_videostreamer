require("dotenv").config();
const express = require("express");
const db = require("./config/connection");
const session = require("express-session");

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const http = require("http");
const cors = require("cors");
const { readFileSync } = require("fs");
const resolvers = require("./schema/resolvers");
const typeDefs = readFileSync("./schema/typeDefs.graphql", "utf8");

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.PORT ? true : false },
  })
);

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // Ensure we wait for our server to start
  await server.start();

  app.use(
    "/",
    cors(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ session: req.session }),
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
}

db.once("open", async () => {
  await startServer();

  console.log("Express server running on port %s", PORT);
  console.log("GraphQL server waiting at /graphql");
});
