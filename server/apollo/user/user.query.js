import models from '../../database/models';

const User = models.user;

export const Query = {
    user: async (_, { id }) => {
        const user = await User.findOne({ where: { id } });

        user.jwt = user.getJwt();

        return user;
    },
    login: async (_, { email, password }) => {
        const query = await User.findOne({ where: { email } });

        const user = await query.comparePassword(password);

        user.jwt = user.getJwt();

        return user;
    }
};
