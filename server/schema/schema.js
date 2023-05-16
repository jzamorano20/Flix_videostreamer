const userSchema = require("../models/User");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

//User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        _id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return userSchema.findById(args._id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return userSchema.find();
      },
    },
  },
});

//Mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        let user = new userSchema({
          username: args.username,
          email: args.email,
          password: args.password,
        });
        return user.save();
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        _id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return userSchema.findByIdAndDelete(args._id);
      },
    },
    updateUser: {
      type: UserType,
      args: {
        _id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return userSchema.findByIdAndUpdate(
          args._id,
          {
            username: args.username,
            email: args.email,
            password: args.password,
          },
          { new: true }
        );
      },
    },
  },
});

//==================================================
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
