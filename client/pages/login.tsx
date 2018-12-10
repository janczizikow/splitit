import React from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";

class LoginPage extends React.Component {
  render() {
    return (
      <Layout fullScreen>
        <Login />
      </Layout>
    );
  }
}

export default LoginPage;
