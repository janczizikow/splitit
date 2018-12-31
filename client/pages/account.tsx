import React from "react";
import Layout from "../components/Layout";
import Account from "../components/Account";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";
import { NextContextWithApollo } from "../utils/types";

class AccountPage extends React.Component {
  static async getInitialProps(context: NextContextWithApollo) {
    const res = await checkLoggedIn(context.apolloClient);
    if (!res.data.me) {
      // If not signed in, send them somewhere more useful
      redirect(context, "/login");
    }

    return { user: { ...res.data.me } };
  }

  render() {
    return (
      <Layout>
        <Account />
      </Layout>
    );
  }
}

export default AccountPage;
