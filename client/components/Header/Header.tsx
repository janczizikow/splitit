import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import User from "../User";
import Container from "../Container";
import Button from "../Button";
import Signout from "../Signout";

const HeaderStyles = styled.header`
  width: 100%;
  height: 60px;

  ${Container} {
    height: 100%;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const LoginBtn = Button.withComponent("a");

const Header = () => (
  <User>
    {me => (
      <HeaderStyles>
        <Container>
          <HeaderInner>
            <Link href="/">
              <a>Splitit</a>
            </Link>
            {me.data.me ? (
              <Signout />
            ) : (
              <Link href="/login">
                <LoginBtn sm>Log in</LoginBtn>
              </Link>
            )}
          </HeaderInner>
        </Container>
      </HeaderStyles>
    )}
  </User>
);

export default Header;
