import { resolver } from 'graphql-sequelize';

import to from 'await-to-js';

import models from '../../database/models';

const User = models.user;

export const Mutation = {
    createUser: resolver(User, {
        before: async (findOptions, { data }) => {
            let err, user;

            [err, user] = await to(User.create(data));

            if (err) {
                throw err;
            }

            findOptions.where = { id: user.id };

            return findOptions;
        },
        after: (user) => {
            user.jwt = user.getJwt();
            
            return user;
        }
    })
};
