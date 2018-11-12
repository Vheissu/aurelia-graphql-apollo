import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    posts: [Post!]
    post(slug: String!): Post!
    postById(id: ID!): Post!
  }

  enum PostType {
      post
      page
  }

  enum Status {
      published
      unpublished
      draft
  }

  type PostGroup {
      posts: [Post!]
      total: Int!
  }

  type Post {
      id: String!
      userId: ID!
      author: User!
      title: String!
      slug: String!
      body: String!
      status: Status!
      type: PostType!
      comments(limit: Int, offset: Int): [Comment!]
      commentsEnabled: Boolean!
      createdAt: String!
      updatedAt: String!
  }

  input PostInput {
      title: String!
      slug: String
      body: String!
      commentsEnabled: Boolean
      status: Status
  }

  extend type Mutation {
    deletePost(id: ID!): Post!
    createPost(input: PostInput!, userId: ID!): Post!
    updatePost(id: ID!, input: PostInput): Post!
  }
`;
