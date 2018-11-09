import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';

import routes from './routes';

const app = express();

app.use(cors());

const server = new ApolloServer({ 
  typeDefs: schema, 
  resolvers
});

const path = '/api/graphql';

server.applyMiddleware({ app, path });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen({ port: 3000 }, () => {
    console.log('==> 🌎 Apollo Server on http://localhost:3000/api/graphql');
});
