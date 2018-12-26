import React from "react";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../User";
import { ApolloClient } from "apollo-boost";
import redirect from "../../lib/redirect";

const SIGNOUT_MUTATION = gql`
  mutation signout {
    signout {
      message
    }
  }
`;

class Signout extends React.Component {
  signout = async (apolloClient: ApolloClient<any>) => {
    await apolloClient.mutate({
      mutation: SIGNOUT_MUTATION,
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });

    apolloClient.cache.reset().then(() => {
      redirect({}, "/login");
    });
  };

  render() {
    return (
      <ApolloConsumer>
        {(client: ApolloClient<any>) => (
          <button onClick={this.signout.bind(this, client)}>Signout</button>
        )}
      </ApolloConsumer>
    );
  }
}

export default Signout;
