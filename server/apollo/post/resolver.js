import { Query } from './post.query';
import { Relationship } from './post.relationship';
import { Mutation } from './post.mutation';

export const resolver = {
    Query: Query,
    Post: Relationship,
    Mutation: Mutation
};
