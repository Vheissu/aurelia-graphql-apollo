import { resolver } from 'graphql-sequelize';
import to from 'await-to-js';

import models from '../../database/models';

const User = models.user;

export const Query = {
    user: resolver(User, {
        before: async (findOptions, { }, { user }) => {
            if (!user) {
                throw new Error('User not authenticated');
            }

            return findOptions.where = { id: user.id }
        },
        after: (user) => {
            user.jwt = user.getJwt();
            return user;
        }
    }),
    loginUser: resolver(User, {
        before: async (findOptions, { email }) => {
            findOptions.where = { email };
        },
        after: async (user, { password }) => {
            let err;

            [err, user] = await to(user.comparePassword(password));

            if (err) {
                console.log(err);
                throw new Error(err);
            }

            user.jwt = user.getJwt();

            return user;
        }
    })
};
