import { ApolloError } from 'apollo-server-express';

export default {
  Query: {
    users: async (_, params, { http }) => {
      try {
        const response = await http.get('users');

        return response.data;
      } catch (e) {
        return new ApolloError(e);
      }
    },
    user: async (_, { id }) => {
      try {
        const response = await http.get(`users/${id}`);

        return response.data;
      } catch (e) {
        return new ApolloError(e);
      }
    }
  },
  Mutation: {
    deleteUser: async (_, { id }, { http }) => {
      try {
        await http.delete(`users/${id}`);

        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    },

    createUser: async(_, { input }, { http }) => {
      try {
        const user = await http.post('users', input);

        return user;
      } catch (e) {
        return null;
      }
    },

    updateUser: async(_, { id, input }, { http }) => {
      try {
        await http.put(`users/${id}`, input);
      } catch (e) {
        return false;
      }
    }
  }
};
