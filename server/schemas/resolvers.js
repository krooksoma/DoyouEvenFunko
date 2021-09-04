const { AuthenticationError } = require("apollo-server-express");
const { User, Funko } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("funkos");
    },
    user: async (parent, { userId }) => {
      // remember to populate user with their funkos
      return User.findOne({ userId }).populate("funkos");
    },
    funkos: async (parent, {username}) => {
      const params = username ? { username } : {};

      return Funko.find(params);
    },
    funko: async (parent, { model, number }) => {
      return Funko.findOne({ model: model, number: number });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("funkos");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // how to pass the user id
    addFunko: async (
      parent,
      { model, series, number, price, image },
      context
    ) => {
      // console.log(model, series, number, price, image);
      if (context.user) {
        const funko = await Funko.create({
          model,
          series,
          number,
          price,
          image,
        });
        // console.log("CONTEXT DATA: ", context.user._id);
        // console.log("Data from the addFunko fields: ", funko);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { funkos: funko } },
          {
            new: true,
            runValidators: true,
          }
        );
        console.log("SUCCESS");
        return funko;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeFunko: async (parent, { funkoId }, context) => {
      // console.log(context);
      if (context.user) {
        const funko = await Funko.findOneAndDelete({ _id: funkoId });
        console.log("Deleted from funkos db", funko)
        
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { funkos: funko._id } },
          { new: true }
          );
          
          console.log("Deleted from User")
          
          return context.user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
