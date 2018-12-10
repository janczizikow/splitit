import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Formik, Form, Field, FormikBag } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import FormContainer from "../FormContainer";
import FormField from "../FormField";
import Button from "../Button";
import Heading from "../Heading";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";

const FORGOT_PASSWORD_MUTATION = gql`
  mutation requestResetPassword($email: String!) {
    requestResetPassword(email: $email) {
      message
    }
  }
`;

interface FormValues {
  email: string;
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required("Required")
});

const Flex = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.greyBg};
`;

const ForgotPassword: React.FunctionComponent<{}> = () => (
  <Mutation mutation={FORGOT_PASSWORD_MUTATION}>
    {(requestResetPassword, { loading, error, called, data }) => (
      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordSchema}
        onSubmit={async (
          values: FormValues,
          { resetForm }: FormikBag<void, FormValues>
        ) => {
          await requestResetPassword({ variables: values });
          resetForm();
        }}
      >
        <Flex>
          <FormContainer>
            <Form noValidate>
              <Heading>Forgot Password?</Heading>
              <p>
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password.
              </p>
              <ErrorMessage error={error} />
              {!error && !loading && called && (
                <SuccessMessage>
                  {data.requestResetPassword.message}
                </SuccessMessage>
              )}
              <Field
                name="email"
                type="email"
                label="Email"
                block
                component={FormField}
              />
              <Button type="submit" disabled={loading} loading={loading} block>
                Send reset instructions
              </Button>
            </Form>
          </FormContainer>
        </Flex>
      </Formik>
    )}
  </Mutation>
);

export default ForgotPassword;
