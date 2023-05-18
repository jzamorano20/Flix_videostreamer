require("dotenv").config();
const express = require("express");
const db = require("./config/connection");
const session = require("express-session");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
// const resolvers = require("./schema/resolvers");
const cors = require("cors");

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));
app.use(cors());

db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
  console.log(`GraphQL server waiting at /graphql`);
});

// const { ApolloServer } = require("@apollo/server");
// const { expressMiddleware } = require("@apollo/server/express4");
// const {
//   ApolloServerPluginDrainHttpServer,
// } = require("@apollo/server/plugin/drainHttpServer");
// const http = require("http");
// const cors = require("cors");

// const resolvers = require("./schema/resolvers");
// const typeDefs = require("./schema/typeDefs");

// const app = express();
// const httpServer = http.createServer(app);

// const PORT = process.env.PORT || 3333;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("../client/dist"));

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: process.env.PORT ? true : false },
//   })
// );

// async function startServer(typeDefs, resolvers) {
//   const server = new ApolloServer({
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   });
//   // Ensure we wait for our server to start
//   await server.start();

//   app.use(
//     "/graphql",
//     cors(),
//     // expressMiddleware accepts the same arguments:
//     // an Apollo Server instance and optional configuration options
//     expressMiddleware(server, {
//       context: async ({ req }) => ({ session: req.session }),
//     })
//   );

//   await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
// }

// db.once("open", async () => {
//   await startServer();

//   console.log("Express server running on port %s", PORT);
//   console.log("GraphQL server waiting at /graphql");
// });
