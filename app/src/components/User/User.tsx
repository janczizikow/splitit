import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const USER_QUERY = gql`
  query userQuery {
    me {
      id
      email
      name
      avatar
    }
  }
`;

interface Props {
  children: (args: any) => JSX.Element;
}

const User: React.FunctionComponent<Props> = ({ children, ...rest }) => (
  <Query query={USER_QUERY} {...rest}>
    {payload => children(payload)}
  </Query>
);

export default User;
