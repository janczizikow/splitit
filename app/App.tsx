import React from "react";
import ApolloClient, { InMemoryCache}  from "apollo-boost";
import { ApolloProvider  } from "react-apollo";
import { persistCache } from 'apollo-cache-persist';
import {AsyncStorage} from 'react-native'
import Navigator from "./src/navigator";
import { GRAPHQL_URL } from "./src/utils/config";

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: AsyncStorage,
});

const client = new ApolloClient({
  uri: GRAPHQL_URL,
});

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default App;
