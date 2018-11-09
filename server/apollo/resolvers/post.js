import { ApolloError } from 'apollo-server-express';

export default {
    Query: {
        posts: (_, args, { db }) => db.post.findAll(),
        post: (_, { id }, { db }) => db.post.findById(id),
    },
    Post: {
        author: (_, args, context) => _.getAuthor(),
    },
    Mutation: {
        createPost: (_, { title, body, userId }, { db }) =>
            db.post.create({
                title: title,
                body: body,
                userId: userId
            }),
        updatePost: (_, { title, content, id }, { db }) =>
            db.post.update(
                {
                title: title,
                content: content
            },
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
