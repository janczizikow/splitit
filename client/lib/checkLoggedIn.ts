import { ApolloClient } from "apollo-boost";
import gql from "graphql-tag";

export default (apolloClient: ApolloClient<any>) =>
  apolloClient
    .query({
      query: gql`
        query user {
          me {
            id
            email
            name
            avatar
          }
        }
      `
    })
    .then(({ data }) => {
      return { data };
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} };
    });
