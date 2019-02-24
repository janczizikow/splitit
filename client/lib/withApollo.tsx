import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { DEV_GRAPHQL_URL, PROD_GRAPHQL_URL } from "../config";

export default withApollo(
  ({ ctx, headers }) =>
    new ApolloClient({
      uri: DEV_GRAPHQL_URL,
      // process.env.NODE_ENV === "development"
      //   ? DEV_GRAPHQL_URL
      //   : PROD_GRAPHQL_URL,
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
