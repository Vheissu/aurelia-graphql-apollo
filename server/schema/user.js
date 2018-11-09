import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        users: [User!]
        user(id: ID!): User
        me: User
    }

    extend type Mutation {
        updateUser(name: String, email: String, password: String, newPassword: String): User!
    }

    type User {
        id: ID!
        name: String!,
        email: String!,
        createdAt: String!
        updatedAt: String!
    }
`;
