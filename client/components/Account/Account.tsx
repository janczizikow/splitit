import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import gql from "graphql-tag";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AvatarUploader from "../AvatarUploader";
import User from "../User";
import FormField from "../FormField";
import ErrorMessage from "../ErrorMessage";
import Button from "../../styles/Button";
import Container from "../../styles/Container";
import Row from "../../styles/Row";
import Col from "../../styles/Col";

const UPDATE_USER_MUTATION = gql`
  mutation updateUser($email: String, $name: String) {
    updateUser(email: $email, name: $name) {
      id
      email
      name
    }
  }
`;

const updateUserValidationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  name: Yup.string().required("Required")
});

interface FormValues {
  name: string;
  email: string;
}

class Account extends React.Component {
  formSubmitHandle = (values: FormValues, mutation: MutationFn) => {
    mutation({ variables: values });
  };

  render() {
    return (
      <User>
        {({ data }) =>
          data.me ? (
            <Mutation mutation={UPDATE_USER_MUTATION}>
              {(updateUser, { loading, error }) => (
                <Container>
                  <Row>
                    <Col md={8} mdOffset={2}>
                      <AvatarUploader avatar={data.me.avatar} />
                      <ErrorMessage error={error} />
                      <Formik
                        initialValues={{
                          avatar: data.me.avatar || "",
                          name: data.me.name,
                          email: data.me.email
                        }}
                        validationSchema={updateUserValidationSchema}
                        onSubmit={(values: FormValues) =>
                          this.formSubmitHandle(values, updateUser)
                        }
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
                              type="text"
                              label="Email"
                              block
                              component={FormField}
                            />
                            <Button
                              type="submit"
                              disabled={loading}
                              loading={loading}
                              block
                            >
                              Update account
                            </Button>
                          </Form>
                        )}
                      </Formik>
                    </Col>
                  </Row>
                </Container>
              )}
            </Mutation>
          ) : (
            <p>Loading...</p>
          )
        }
      </User>
    );
  }
}

export default Account;
