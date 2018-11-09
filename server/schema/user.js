const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  input UserInput {
    isActive: Boolean
    picture: String
    name: String
    gender: String
    company: String
    email: String
    phone: String
    address: String
    about: String
  }

  extend type Mutation {
    deleteUser(id: ID!): Boolean!
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): String
  }

  type User {
    id: ID!
    isActive: Boolean!
    picture: String!
    name: String!
    gender: String!
    company: String!
    email: String!
    phone: String!
    address: String!
    about: String!
    registered: String!
  }
`;
