export const Query = {
    user: (_, { id }, { db }) => db.author.findById(id)
};
