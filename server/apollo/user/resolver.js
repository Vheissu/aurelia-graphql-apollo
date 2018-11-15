import { Query } from './user.query';
import { Relationship } from './user.relationship';
import { Mutation } from './user.mutation';

export const resolver = {
    Query: Query,
    User: Relationship,
    Mutation: Mutation
};
