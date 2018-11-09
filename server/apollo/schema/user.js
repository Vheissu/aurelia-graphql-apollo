import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        users: [User!]
        user(id: ID!): User
        posts: [Post!]!
        me: User
    }

    extend type Mutation {
        updateUser(name: String, email: String, password: String, newPassword: String): User!
    }

    type User {
        id: ID!
        name: String!,
        email: String!,
        password: String
        createdAt: String!
        updatedAt: String!
    }
`;
