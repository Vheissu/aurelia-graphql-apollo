export const Mutation = {
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
};
