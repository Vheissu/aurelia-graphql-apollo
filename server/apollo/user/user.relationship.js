import { resolver } from 'graphql-sequelize';

import models from '../../database/models';

const User = models.user;

export const Relationship = {
    posts: resolver(User.associations.posts)
};
