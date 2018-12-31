import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import User from "../User";
import Avatar from "../../styles/Avatar";
import Container from "../../styles/Container";
import Button from "../../styles/Button";
import { Dropdown, DropdownItem } from "../Dropdown";
import Signout from "../Signout";
import logo from "../../static/splitit_logo_v1.svg";

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
              <a>
                <img src={logo} />
              </a>
            </Link>
            {me.data.me ? (
              <Dropdown
                title={
                  <>
                    <Avatar sm src={me.data.me.avatar} />
                    <span>{me.data.me.name}</span>
                  </>
                }
              >
                <DropdownItem>
                  <Link href="/account">
                    <a>Account</a>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Signout />
                </DropdownItem>
              </Dropdown>
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
