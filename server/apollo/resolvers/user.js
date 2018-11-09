import { ApolloError } from 'apollo-server-express';

export default {
    Query: {
        user: (_, { id }, { db }) => db.author.findById(id) 
    },
    User: {
        posts: (_, args, context) => _.getPosts(),
    }
};
