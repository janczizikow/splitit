import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Navigator from "./src/navigator/Navigator";
import { View, Text } from "react-native";
import { GRAPHQL_URL } from "./src/utils/config";

const client = new ApolloClient({
  uri: GRAPHQL_URL
});

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default App;
