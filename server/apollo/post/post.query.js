export const Query = {
    posts: (_, args, { db }) => db.post.findAll(),
    post: (_, { id }, { db }) => db.post.findById(id)
};
