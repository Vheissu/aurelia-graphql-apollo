import { resolver } from 'graphql-sequelize';
import models from '../../../database/models';

export const Relationship = {
    posts: resolver(models.user.associations.posts)
};
