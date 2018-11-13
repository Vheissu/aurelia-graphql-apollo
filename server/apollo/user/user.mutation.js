import { resolver} from 'graphql-sequelize';
import models from '../../database/models';

import { ApolloError } from 'apollo-server-express';

export const Mutation = {
    createUser: resolver(models.user, {
      before: async (findOptions, { data }) => {
        try {
            const user = await User.create(data);

            findOptions.where = { id: user.id };
    
            return findOptions;
        } catch (e) {
            return new ApolloError(e);
        }
      },
      after: (user) => {
        //user.jwt = user.getJwt();
        return user;
      }
    })
};
