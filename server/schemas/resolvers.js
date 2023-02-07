const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
 
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return awaitUser.findOne({ _id: context.user._id });
      } 
      throw new AuthenticationError("We cannot find that user");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const User = await User.findOne({
        email,
      });

      if (!User) {
        throw new AuthenticationError("No User with this login found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      return { token, user };
    },

    makeReservation: async (parent, {resInfo}, context) => {
        if (context.user) {
          const updatedUser = await User.
          findByIdAndUpdate(
            {_id: context.user._id},
            {$push: {madeReservations: resInfo} },
            {new: true,}

          );
          return updatedUser
        }
        throw new AuthenticationError ("Please login")
      },

    cancelReservation: async (parent, {restaurant_id}, context ) => {
      if (context.user) {
        const updatedUser = await User.
          findOneAndUpdate(
          {_id: context.user._id},
          { 
            
            $pull: {madeReservations: {restaurant_id}},
          
          },
          {
            new: true,
          
          }

        );
        return updatedUser

      }
      throw new AuthenticationError ("Please login")

    },
    
  },
  
};

module.exports = resolvers;
