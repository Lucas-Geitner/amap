// @ts-nocheck
import { ApolloClient } from 'apollo-client';
import fetch from 'isomorphic-unfetch';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
// import withApolloClient from '../pages/_app';

let apolloClient = null;

function create(initialState: any) {
  const typeDefs = gql`
    extend type Query {
      visibilityFilter: String!
    }
  `;

  const cache = new InMemoryCache().restore(initialState || {});

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const apolloClient = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !process.browser && fetch,
    }),
    cache,
    typeDefs,
    resolvers: {
      Query: {
        visibilityFilter: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Book', id: args.id }),
      },
      Mutation: {
        updateConnection: (_root, variables, { cache, getCacheKey }) => {
          const query = gql`
            {
              visibilityFilter
            }
          `;
          const todo = cache.readQuery({ query });
          const data = variables;
          cache.writeData({ todo, data });
          return null;
        },
      },
    },
  });

  cache.writeData({
    data: {
      todos: [],
      visibilityFilter: 'SHOW_ALL',
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: false,
      },
    },
  });
  return apolloClient;
}

export default function initApollo(initialState = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }
  return apolloClient;
}
