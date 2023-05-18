require("dotenv").config();
const express = require("express");
const db = require("./config/connection");
const session = require("express-session");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { google } = require('googleapis');
const apiKey = 'AIzaSyBzkrecHSWUAC9ByRbuTzo1bZo1JHlVIQ0';
const baseApiUrl = 'https://youtube.googleapis.com/youtube/v3';
const youtube = google.youtube({
  version: 'v3',
  auth: apiKey,
})


// const resolvers = require("./schema/resolvers");
const cors = require("cors");

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));

// Response header middleware
app.use((req, res, next) => {
  res.removeHeader("Permissions-Policy");
  next();
});

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

// Youtube API
app.get("/search-with-googleapis", async (req, res) => {
  try {
    const searcQuery = req.query.search_query;
    const response = await youtube.search.list({
      part: 'snippet',
      q: searcQuery,
      type: 'video',
    });
    const titles = response.data.items.map((item) => item.snippet.title);
    res.send(titles);
  } catch (err) {
    next(err);
  }
})
