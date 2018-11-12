import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { ApolloServer } from 'apollo-server-express';

import schema from './apollo/schema';
import resolvers from './apollo/resolvers';

import routes from './routes';

import db from './models';

const app = express();

app.use(cors());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: { db }
});

const path = '/api/graphql';

server.applyMiddleware({ app, path });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

db.sequelize.sync().then(() => {
    app.listen({ port: 3000 }, () => {
        console.log('==> 🌎 Apollo Server on http://localhost:3000/api/graphql');
    });
});
