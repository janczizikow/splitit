import styled from "@emotion/styled";
import getZIndex from "./z-index";

export const DropdownStyles = styled.div`
  position: relative;
  height: 100%;
`;

export const DropdownTriggerStyles = styled.button`
  position: relative;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  border: 0;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 400;
  padding: 0;
  outline: 0;
  cursor: pointer;

  &::after {
    color: #abadad;
    display: inline-block;
    margin-left: 0.4rem;
    vertical-align: middle;
    content: "";
    border-top: 0.325rem solid;
    border-right: 0.325rem solid transparent;
    border-bottom: 0;
    border-left: 0.325rem solid transparent;
  }
`;

export const DropdownMenuStyles = styled.ul`
  padding: 0.5rem 0;
  margin: 0;
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  list-style-type: none;
  min-width: 10rem;
  background-color: #fff;
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.3);
  z-index: ${getZIndex("dropdown")};
`;

export const DropdownItemStyles = styled.li`
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  overflow: hidden;

  a,
  button {
    padding: 0.5rem 1rem;
    display: block;
    width: 100%;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: normal;
    text-align: left;
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  a:hover,
  button:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.lightGreyBg};
  }
`;

DropdownStyles.displayName = "DropdownStyles";
DropdownTriggerStyles.displayName = "DropdownTriggerStyles";
DropdownMenuStyles.displayName = "DropdownMenuStyles";
DropdownItemStyles.displayName = "DropdownItemStyles";
