import { ApolloError, ValidationError } from 'apollo-server-express';
import find from 'lodash/find';

import Posts from '../models/posts.json';

export default {
  Query: {
    post: async (_, { slug }) => {
      try {
        const post = find(Posts, { slug });

        return post || ValidationError('Post not found');
      } catch (e) {
        return new ApolloError(e);
      }
    },
    postById: async (_, { id }) => {
        try {
            const post = find(Posts, { id });
    
            return post || ValidationError('Post not found');
          } catch (e) {
            return new ApolloError(e);
          }  
    }
  }
};
