import React from "react";
import Link from "next/link";
import { Mutation, withApollo, WithApolloClient } from "react-apollo";
import gql from "graphql-tag";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import ErrorMessage from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "../User";
import Button from "../../styles/Button";
import FormContainer from "../../styles/FormContainer";
import FormField from "../FormField";
import Heading from "../../styles/Heading";
import redirect from "../../lib/redirect";

const SIGNUP_MUTATION = gql`
  mutation signupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

type Props = WithApolloClient<any>;

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
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

const Signup: React.FunctionComponent<Props> = ({ client }) => (
  <Mutation
    mutation={SIGNUP_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    onCompleted={() => {
      client.cache.reset().then(() => {
        redirect({}, "/account");
      });
    }}
  >
    {(signup, { loading, error }) => (
      <Flex>
        <FormContainer>
          <Heading>Signup</Heading>
          <ErrorMessage error={error} />
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values: FormValues) => {
              signup({ variables: values });
            }}
          >
            {() => (
              <Form noValidate>
                <Field
                  name="name"
                  type="text"
                  label="Name"
                  block
                  component={FormField}
                />
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
                  Signup
                </Button>
              </Form>
            )}
          </Formik>
          <LinksStyles>
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <a>Login</a>
              </Link>
            </p>
          </LinksStyles>
        </FormContainer>
      </Flex>
    )}
  </Mutation>
);

export default withApollo(Signup);
