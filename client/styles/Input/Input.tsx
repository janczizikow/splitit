import styled from "@emotion/styled";
import { FormikErrors } from "formik";
import hexToRgba from "hex-to-rgba";

interface Props {
  block?: boolean;
  error?: string | boolean | FormikErrors<any>;
}

const Input = styled.input`
  padding: 0.75rem 1rem;
  display: ${(p: Props) => (p.block ? "block" : "inline-block")};
  width: ${(p: Props) => p.block && "100%"};
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.15;
  background-color: #fff;
  border: ${p =>
    `1px solid ${p.error ? p.theme.colors.error : p.theme.colors.border}`};
  border-radius: ${p => `${p.theme.borderRadius}px`};
  transition: box-shadow 0.15s ease-out, border-color 0.15s ease-out;
  caret-color: #00ccbc;

  &:focus {
    border: ${p => `1px solid ${p.theme.colors.primary}`};
    outline: none;
    box-shadow: ${p => `0 0 0 3px ${hexToRgba(p.theme.colors.primary, 0.3)}`};
  }
`;

export default Input;
