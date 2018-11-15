import models from '../../database/models';

const Post = models.post;

export const Query = {
    posts: async (_) => {
        return await Post.findAll();
    },
    post: async (_, { id }) => {
        return await Post.findById(id);
    }
};
