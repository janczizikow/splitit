import React from "react";
import { ApolloClient } from "apollo-boost";
import Layout from "../components/Layout";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";
import { NextContext } from "next";

class AccountPage extends React.Component {
  static async getInitialProps(
    context: NextContext & { apolloClient: ApolloClient<any> }
  ) {
    const res = await checkLoggedIn(context.apolloClient);
    if (!res.data.me) {
      // If not signed in, send them somewhere more useful
      redirect(context, "/login");
    }

    console.log(res);

    return { user: { ...res.data.me } };
  }

  render() {
    return (
      <Layout>
        <p>this should be a prive route</p>
      </Layout>
    );
  }
}

export default AccountPage;
