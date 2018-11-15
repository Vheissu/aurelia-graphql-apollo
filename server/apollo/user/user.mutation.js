import models from '../../database/models';

const User = models.user;

export const Mutation = {
    createUser: async (_, { data }) => {
        const user = await User.create(data);

        user.jwt = user.getJwt();

        return user;
    },
    updateUser: async (_, { id, name, email, password }) => {
        const user = await User.findById(id);

        await user.update({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });

        user.jwt = user.getJwt();

        return user;
    }
};
