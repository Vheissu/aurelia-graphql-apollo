import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    isActive: Boolean!
    picture: String!
    name: String!
    gender: String!
    Company: String!
    Email: String!
    Phone: String!
    address: String!
    about: String!
    registered: String!
  }
`;
