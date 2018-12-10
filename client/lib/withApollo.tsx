import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { GRAPHQL_URL } from "../config";

export default withApollo(
  ({ ctx, headers }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      // @ts-ignore
      request: (operation): Promise<void> => {
        operation.setContext({
          fetchOptions: {
            credentials: "include"
          },
          headers
        });
      }
    })
);
