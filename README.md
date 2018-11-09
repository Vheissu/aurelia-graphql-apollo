# aurelia-graphql-apollo
An example application showcasing how to integrate Apollo Client and Server into an Aurelia application.

## Client

The client exists within the `src` directory and is an Aurelia CLI based application.

### Prerequisites

- Make sure you have Node.js installed (latest LTS)
- Installing Aurelia CLI globally: `npm install aurelia-cli -g`
- In the root directory, do an `npm install` or `yarn` to install dependencies for the client and server. Packages for both exist in the root `package.json` file.

To run the client application, after installing the dependencies above run the app by typing: `au run --watch` to run the app on port 8080 and access the app at `http://localhost:8080`

## Server

The server in this example is a basic Node.js Express based application using the `apollo-server-express` package to add in Apollo Server to an Express based web application. Thereoetically, you could replace this with any GraphQL backend. This example uses Apollo as it is one of the most popular options around for adding in GraphQL to a web application.

To run the server you'll need to open up a terminal window and run the npm script either by running `npm run-script server` or `yarn server` depending on your package manager of choice. This will be a different terminal window than the one you are running your Aurelia app in.

The server will be running on port 3000 and accessible at `http://localhost:3000` to view the GraphQL IDE in the browser visit `http://localhost:3000/graphql` to interact with the Apollo Server, write queries and inspect your schema.
