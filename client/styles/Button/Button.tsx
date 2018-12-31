import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import hexToRgba from "hex-to-rgba";

interface Props {
  sm?: boolean;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const loader = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Button = styled.button`
  position: relative;
  padding: ${(p: Props) => (p.sm ? "0.5rem 1rem" : "0.75rem 1.5rem")};
  display: ${(p: Props) => (p.block ? "block" : "inline-block")};
  width: ${(p: Props) => p.block && "100%"};
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: ${(p: Props) => (p.loading ? "transparent" : "#fff")};
  background-color: ${p => p.theme.colors.primary};
  border: 0;
  border-radius: ${p => `${p.theme.borderRadius}px`};
  appearance: none;
  user-select: none;
  transition: box-shadow 0.15s ease-out, background-color 0.15s ease-out;
  cursor: ${p => (p.disabled ? "not-allowed" : "pointer")};

  &:not(:disabled) {
    &:hover {
      background-color: #00c2b3;
      text-decoration: none;
    }
  }

  &:focus {
    outline: 0;
    box-shadow: ${p => `0 0 0 3px ${hexToRgba(p.theme.colors.primary, 0.3)}`};
  }

  &:after {
    content: "";
    position: absolute;
    display: ${p => (p.loading ? "block" : "none")};
    top: 50%;
    left: 50%;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    border-right: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    border-left: 2px solid #fff;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: ${loader} 1.1s infinite linear;
  }
`;

Button.displayName = "Button";

export default Button;
