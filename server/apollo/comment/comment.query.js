import { ApolloError, ValidationError } from 'apollo-server-express';
import find from 'lodash/find';

export const Query = {
    post: async (_, { slug }) => {
        return {};
    },
    postById: async (_, { id }) => {
        return {};
    }
};
