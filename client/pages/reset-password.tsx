import React from "react";
import { NextContext } from "next";
import Layout from "../components/Layout";
import ResetPassword from "../components/ResetPassword";

interface Props {
  query?: {
    resetToken?: string;
  };
}

class ResetPasswordPage extends React.Component<Props> {
  static async getInitialProps({ query }: NextContext) {
    return { query };
  }

  render() {
    const { query } = this.props;
    return (
      <Layout fullScreen>
        <ResetPassword resetToken={query && query.resetToken} />
      </Layout>
    );
  }
}

export default ResetPasswordPage;
