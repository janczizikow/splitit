import { Query } from "react-apollo";
import gql from "graphql-tag";

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
    }
  }
`;

interface Props {
  children: (payload) => JSX.Element;
  rest?: any;
}

const User: React.FunctionComponent<Props> = ({ children, rest }) => (
  <Query query={CURRENT_USER_QUERY} {...rest}>
    {payload => children(payload)}
  </Query>
);

export default User;
