import React from "react";
import { Query } from "react-apollo";
import Router from "next/router";
import { CURRENT_USER_QUERY } from "../User";

interface Props {
  children: React.ReactNode;
}

class Guard extends React.Component<Props> {
  redirect() {
    Router.push({ pathname: "/login" });
  }

  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.me) {
            this.redirect();
          }
          return this.props.children;
        }}
      </Query>
    );
  }
}

export default Guard;
