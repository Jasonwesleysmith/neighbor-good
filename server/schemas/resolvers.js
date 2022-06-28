const { User, Job } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get me user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('jobs');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get jobs
    jobs: async (parent, args) => {
      return Job.find();
    },

    // get all users
    users: async () => {
      return User.find().select('-__v -password').populate('jobs');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('jobs');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate({username:context.user.username},args,{new:true}).populate("jobs")
      }
    },

    addJob: async (parent, args, context) => {
      console.log(context.user);
      console.log(args);
      if (context.user) {
        // await User.findByIdAndUpdate(
        //   { _id: context.user._id },
        //   { $push: { jobs: job._id } },
        //   { new: true }
        // );

        return await Job.create({
          ...args,
          username: context.user.username,
        });
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
