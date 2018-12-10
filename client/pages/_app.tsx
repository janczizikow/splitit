import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import NProgress from "next-nprogress/component";
import withApollo from "../lib/withApollo";
import theme from "../utils/theme";
import globalStyles from "../utils/global";

interface Props {
  apollo: ApolloClient<any>;
}

class Root extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <NProgress color={theme.colors.primary} spinner />
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(Root);
