import { ApolloError } from 'apollo-server-express';

export default {
    Query: {
        posts: (_, args, { db }) => db.post.findAll(),
        post: (_, { id }, { db }) => db.post.findById(id),
    },
    Post: {
        author: (_, args) => _.getAuthor(),
    },
    Mutation: {
        createPost: (_, { input, userId }, { db }) =>
            db.post.create({
                ...input,
                userId: userId
            }),
        updatePost: (_, { id, input }, { db }) =>
            db.post.update(input,
                {
                    where: {
                        id: id
                    }
                }),
        deletePost: (_, { id }, { db }) =>
            db.post.destroy({
                where: {
                    id: id
                }
            })
    }
};
