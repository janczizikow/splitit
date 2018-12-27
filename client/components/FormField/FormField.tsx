import React from "react";
import styled from "@emotion/styled";
import { FieldProps } from "formik";
import Input from "../../styles/Input";

interface OwnProps {
  label: string;
  block?: boolean;
}

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const InputError = styled.span`
  display: block;
  color: ${p => p.theme.colors.error};
  font-size: 0.75rem; /* 12px */
  min-height: 18px; /* 1.5 line height * 12 px */
`;

type Props = OwnProps & FieldProps;

const FormField: React.FunctionComponent<Props> = ({
  field,
  form: { touched, errors },
  label,
  block,
  ...rest
}) => (
  <div>
    <Label htmlFor={field.name}>{label}</Label>
    <Input
      id={field.name}
      error={touched[field.name] && errors[field.name]}
      block={block}
      {...field}
      {...rest}
    />
    <InputError>
      {touched[field.name] && errors[field.name] && errors[field.name]}
    </InputError>
  </div>
);

export default FormField;
