import { Query } from './comment.query';
import { Relationship } from './comment.relationship';
import { Mutation } from './comment.mutation';

export const resolver = {
    Query: Query,
    Comment: Relationship,
    Mutation: Mutation
};
