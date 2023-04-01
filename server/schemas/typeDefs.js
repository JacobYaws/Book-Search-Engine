const { gql } = require('apollo-server-express');
// Came from 'type Query' above the 'me'
// users: [User]!
    // user(userId: ID!): User

    // Came from type Mutation
    // saveBook(criteria: SavedBookInput!): User
const typeDefs = gql`

type Query {
    me: User
  }

  input SavedBookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(criteria: SavedBookInput): User
    removeBook(bookId: ID!): User
  }

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
