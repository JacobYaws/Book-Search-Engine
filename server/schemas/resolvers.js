const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.find().populate('bookId')
            }
        },
    },

Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
},




    addBook: async (parent, { bookId }, context) => {
        if (context.user) {
        const book = await User.create({
            thoughtText,
            thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { thoughts: thought._id } }
        );

        return thought;
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { thoughtId, commentId }, context) => {
        if (context.user) {
        return Thought.findOneAndUpdate(
            { _id: thoughtId },
            {
            $pull: {
                comments: {
                _id: commentId,
                commentAuthor: context.user.username,
                },
            },
            },
            { new: true }
        );
        }
        throw new AuthenticationError('You need to be logged in!');
    },
};