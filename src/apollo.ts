import ApolloClient, { InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache
});

const query = (query) => client.query({ query: gql(query) });

export { client, query };
