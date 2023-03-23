import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($thoughtText: String!) {
    saveBook(thoughtText: $thoughtText) {
      _id
      username
      email
      bookCount
      savedBooks {
            bookId
            authors
            description
            title
            image
            link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($thoughtId: ID!, $commentText: String!) {
    removeBook(thoughtId: $thoughtId, commentText: $commentText) {
        _id
        username
        email
        bookCount
        savedBooks {
              bookId
              authors
              description
              title
              image
              link
        }
    }
  }
`;
