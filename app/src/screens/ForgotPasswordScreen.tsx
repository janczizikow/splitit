import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text, FormLabel, FormInput, Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

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

export default class ForgotPasswordScreen extends PureComponent {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: "Forgot Password"
  });

  render() {
    return (
      <Mutation mutation={FORGOT_PASSWORD_MUTATION}>
        {(requestResetPassword, { loading, error, called, data }) => (
          <Formik
            initialValues={{ email: "" }}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values: FormValues) => {
              requestResetPassword({ variables: values });
            }}
          >
            {props => (
              <View style={styles.container}>
                <View style={styles.content}>
                  <View style={{ marginHorizontal: 16 }}>
                    <Text style={{ textAlign: "center" }}>
                      Enter the email address you used when you joined and we’ll
                      send you instructions to reset your password.
                    </Text>
                  </View>
                  <ErrorMessage error={error} />
                  <View style={styles.fieldContainer}>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                      keyboardType="email-address"
                      textContentType="emailAddress"
                      underlineColorAndroid="#00ccbb"
                      // inputStyle={styles.input}
                      onChangeText={props.handleChange("email")}
                      onBlur={props.handleBlur("email")}
                      value={props.values.email}
                    />
                  </View>
                  <Button
                    title="Send reset instructions"
                    backgroundColor="#00ccbb"
                    loading={loading}
                    onPress={props.handleSubmit}
                  />
                </View>
              </View>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: "100%"
  },
  fieldContainer: {
    marginBottom: 16
  },
  input: {
    width: "100%"
  }
});
