import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        users: [User!]
        user(id: ID!): User
        me: User
    }


    input UserInput {
        name: String!
        email: String!
    }

    extend type Mutation {
        updateUser(name: String, email: String, password: String, newPassword: String): User!
        deleteUser(id: ID!): Boolean!
        createUser(input: UserInput): User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }
`;
