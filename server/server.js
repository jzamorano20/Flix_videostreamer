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
