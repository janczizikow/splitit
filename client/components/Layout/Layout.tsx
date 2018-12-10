import React from "react";
import styled from "@emotion/styled";
import Meta from "../Meta";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

interface SiteContentProps {
  fullScreen?: boolean;
}

type Props = LayoutProps & SiteContentProps;

const Site = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SiteContent = styled.main`
  flex: 1;
  display: ${(p: SiteContentProps) => p.fullScreen && "flex"};
  flex-direction: ${(p: SiteContentProps) => p.fullScreen && "column"};
`;

const Layout: React.FunctionComponent<Props> = ({ fullScreen, children }) => (
  <Site>
    <Meta />
    <Header />
    <SiteContent fullScreen={fullScreen}>{children}</SiteContent>
    <Footer />
  </Site>
);

export default Layout;
