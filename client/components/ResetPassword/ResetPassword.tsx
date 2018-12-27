import React from "react";
import { Mutation, withApollo, WithApolloClient } from "react-apollo";
import gql from "graphql-tag";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { CURRENT_USER_QUERY } from "../User";
import FormField from "../FormField";
import FormContainer from "../../styles/FormContainer";
import Button from "../../styles/Button";
import Heading from "../../styles/Heading";
import ErrorMessage from "../ErrorMessage";
import redirect from "../../lib/redirect";

const REST_PASSWORD_MUTATION = gql`
  mutation resetPassword(
    $password: String!
    $confirmPassword: String!
    $resetToken: String!
  ) {
    resetPassword(
      password: $password
      confirmPassword: $confirmPassword
      resetToken: $resetToken
    ) {
      id
    }
  }
`;

interface FormValues {
  password: string;
  confirmPassword: string;
}

interface OwnProps {
  resetToken?: string;
}

type Props = WithApolloClient<OwnProps>;

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required")
});

const ResetPassword: React.FunctionComponent<Props> = ({
  resetToken,
  client
}) => (
  <Mutation
    mutation={REST_PASSWORD_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    onCompleted={() => {
      client.cache.reset().then(() => {
        redirect({}, "/account");
      });
    }}
  >
    {(resetPassword, { loading, error }) => (
      <FormContainer>
        <Heading>Reset Password</Heading>
        <ErrorMessage error={error} />
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={resetPasswordSchema}
          onSubmit={(values: FormValues) => {
            resetPassword({ variables: { ...values, resetToken } });
          }}
        >
          {() => (
            <Form noValidate>
              <Field
                name="password"
                type="password"
                label="Password"
                block
                component={FormField}
              />
              <Field
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                block
                component={FormField}
              />
              <Button type="submit" disabled={loading} loading={loading} block>
                Rest Password
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    )}
  </Mutation>
);

export default withApollo(ResetPassword);
