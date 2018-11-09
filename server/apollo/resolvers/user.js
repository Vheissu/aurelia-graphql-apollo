import { ApolloError } from 'apollo-server-express';

export default {
    Query: {
        author: (_, { id }, { db }) => db.author.findById(id) 
    },
    User: {
        posts: (_, args, context) => _.getPosts(),
    }
};
