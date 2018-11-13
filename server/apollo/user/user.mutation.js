import models from '../../database/models';

const User = models.user;

export const Mutation = {
    createUser: async (_, { data }) => {
        return await User.create(data);
    },
    updateUser: async (_, { id, name, email, password }) => {
        const user = await User.findById(id);

        await user.update({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });

        return user;
    }
};
