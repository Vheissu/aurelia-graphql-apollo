import models from '../../database/models';

const Post = models.post;

export const Mutation = {
    createPost: async (_, { input, userId }) => {
        return await Post.create({
            ...input,
            userId: userId
        });
    },
    updatePost: async (_, { id, input }) => {
        return await Post.update(input, { where: { id: id } });
    },
    deletePost: async (_, { id }) => {
        return await Post.destroy({ where: { id: id } })
    }
};
