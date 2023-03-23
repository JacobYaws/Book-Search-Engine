const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    // users: [User]!
    // user(userId: ID!): User
    me: User
  }

  input SavedBookInput {
    author: String!
    description: String
    title: String!
    bookId: ID!
    image: String
    link: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(criteria: SavedBookInput): [User]!
    // saveBook(criteria: SavedBookInput!): User
    removeBook(bookId: ID!): User
  }

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]!
  }

type Book {
    bookId: Int
    authors: [String]!
    description: String
    title: String!
    image: String
    link: String!
}

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
