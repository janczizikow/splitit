import React from "react";
import styled from "@emotion/styled";
import Container from "../../styles/Container";

const FooterStyles = styled.footer`
  padding: 1.5rem 0;
  color: #626666;
  font-size: 0.875rem;
  background-color: ${p => p.theme.colors.headingColor};
`;

const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

FooterStyles.displayName = "FooterStyles";

const Footer = () => (
  <FooterStyles>
    <Container>
      <FooterInner>
        <span>&copy; {new Date().getFullYear()} Splitit</span>
      </FooterInner>
    </Container>
  </FooterStyles>
);

export default Footer;
