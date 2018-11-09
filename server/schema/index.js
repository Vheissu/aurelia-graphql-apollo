import { gql } from 'apollo-server-express';

import Auth from './auth';
import Comment from './comment';
import User from './user';
import Post from './post';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, Auth, Comment, User, Post];
