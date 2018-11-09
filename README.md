# WIP

Please do not attempt to base any applications off of just yet. This is still in progress, close to being finalised, but not quite complete just yet.

# Aurelia + GraphQL + Apollo Client and Apollo Server
An example application showcasing how to integrate Apollo Client and Server into an Aurelia application.

## Client

The client exists within the `src` directory and is an Aurelia CLI based application. The client application uses the `apollo-boost` package which is a combination of numerous Apollo dependencies and defaults for using Apollo Client on the front-end. The Apollo team plans to merge this back into the main client eventually, so this dependency will be deprecated soon and this repo updated to reflect the change.

### Prerequisites

- Make sure you have Node.js installed (latest LTS)
- Installing Aurelia CLI globally: `npm install aurelia-cli -g`
- In the root directory, do an `npm install` or `yarn` to install dependencies for the client and server. Packages for both exist in the root `package.json` file.

To run the client application, after installing the dependencies above run the app by typing: `au run --watch` to run the app on port 8080 and access the app at `http://localhost:8080`

## Server

The server in this example is a basic Node.js Express based application using the `apollo-server-express` package to add in Apollo Server to an Express based web application. Thereoetically, you could replace this with any GraphQL backend. This example uses Apollo as it is one of the most popular options around for adding in GraphQL to a web application.

To run the server you'll need to open up a terminal window and run the npm script either by running `npm run-script server` or `yarn server` depending on your package manager of choice. This will be a different terminal window than the one you are running your Aurelia app in.

The server will be running on port 3000 and accessible at `http://localhost:3000` to view the GraphQL IDE in the browser visit `http://localhost:3000/graphql` to interact with the Apollo Server, write queries and inspect your schema.

### Structure

There are many approaches you can take to structuring a GraphQL backend using Apollo. I have broken up the individual components of an Apollo Server into `schema`, `resolvers` and `models`.

The `schemas` folder is created in such a way that each individual entity in your application has its own separate file. This is especially helpful for large-scale applications, separation of concerns and schemas is important. Your schemas describe the structure and relationships of your data.

The `resolvers` folder is where your schema entity and relationships are defined. Like your schemas, each resolver is contained within its own separate file and stitched together at the end. This keeps things neat and separates concerns (it also makes things easier to read).

The `models` folder is where you can store mock data or logic which might fetch data. I tend to use the `models` folder for mock data, others use it to add in data fetching layers for individual pieces of data.
