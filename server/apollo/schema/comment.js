import { gql } from 'apollo-server-express';

export default gql`
    type Comment {
        id: ID!
        author: User!
        post: Post!
        body: String!
        createdAt: String!
        updatedAt: String!
    }

    extend type Mutation {
        addComment(postId: ID!, body: String): Comment!
    }
`;
