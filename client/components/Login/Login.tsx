import React from "react";
import Link from "next/link";
import { Mutation, withApollo, WithApolloClient } from "react-apollo";
import gql from "graphql-tag";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import FormContainer from "../FormContainer";
import FormField from "../FormField";
import Button from "../Button";
import Heading from "../Heading";
import ErrorMessage from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "../User";
import redirect from "../../lib/redirect";

const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

interface FormValues {
  email: string;
  password: string;
}

type Props = WithApolloClient<any>;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email address is invalid")
    .required("Required"),
  password: Yup.string().required("Required")
});

const Flex = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.greyBg};
`;

const LinksStyles = styled.div`
  text-align: center;
  a,
  p {
    margin-top: 1rem;
  }
  a {
    color: ${p => p.theme.colors.primary};
  }
`;

const Login: React.FunctionComponent<Props> = ({ client }) => (
  <Mutation
    mutation={LOGIN_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    onCompleted={() => {
      client.cache.reset().then(() => {
        redirect({}, "/account");
      });
    }}
  >
    {(login, { loading, error }) => (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values: FormValues) => {
          login({ variables: values });
        }}
      >
        {() => (
          <Flex>
            <FormContainer>
              <Form noValidate>
                <Heading>Login</Heading>
                <ErrorMessage error={error} />
                <Field
                  name="email"
                  type="email"
                  label="Email"
                  block
                  component={FormField}
                />
                <Field
                  name="password"
                  type="password"
                  label="Password"
                  block
                  component={FormField}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  loading={loading}
                  block
                >
                  Login
                </Button>
              </Form>
              <LinksStyles>
                <p>
                  Don&apos;t have an account yet?{" "}
                  <Link href="/signup">
                    <a>Sign up</a>
                  </Link>
                </p>
                <Link href="/forgot-password">
                  <a>Forgot password?</a>
                </Link>
              </LinksStyles>
            </FormContainer>
          </Flex>
        )}
      </Formik>
    )}
  </Mutation>
);

export default withApollo(Login);
