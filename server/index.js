import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';

import { ApolloServer } from 'apollo-server-express';
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';

import { schema, resolver } from './apollo'

import db from './database/models';

const app = express();

const authMiddleware = jwt({
    secret: "thisismysecretvalue",
    credentialsRequired: false,
});

app.use(authMiddleware);

app.use(cors());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
    playground: true,
    context: ({ req }) => {
        return {
            [EXPECTED_OPTIONS_KEY]: createContext(db),
            user: req.user,
        }
    }
});

server.applyMiddleware({ app });

db.sequelize.sync().then(() => {
    app.listen({ port: 3000 }, () => {
        console.log(`==> 🌎 Apollo Server on http://localhost:3000${server.graphqlPath}`);
    });
});
