import React, { PureComponent } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  AsyncStorage,
  Platform
} from "react-native";
import {
  Text,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email address is invalid")
    .required("Required"),
  password: Yup.string().required("Required")
});

interface FormValues {
  email: string;
  password: string;
}

class LoginScreen extends PureComponent<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    header: null
  });

  handleLogin = async data => {
    await AsyncStorage.setItem("userToken", data.login.id);
    this.props.navigation.navigate("App");
  };

  goToSignup = () => {
    this.props.navigation.navigate("Signup");
  };

  goToForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  };

  render() {
    return (
      <Mutation mutation={LOGIN_MUTATION} onCompleted={this.handleLogin}>
        {(login, { loading, error }) => (
          <>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values: FormValues) => {
                login({ variables: values });
              }}
            >
              {props => (
                <ScrollView
                  style={styles.container}
                  contentContainerStyle={styles.contentContainer}
                  keyboardShouldPersistTaps="handled"
                >
                  <View style={styles.content}>
                    <Text h4 style={styles.heading}>
                      Login
                    </Text>
                    <ErrorMessage error={error} />
                    <View style={styles.fieldContainer}>
                      <FormLabel>Email</FormLabel>
                      <FormInput
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        underlineColorAndroid="#00ccbb"
                        inputStyle={styles.input}
                        onChangeText={props.handleChange("email")}
                        onBlur={props.handleBlur("email")}
                        value={props.values.email}
                      />
                      {props.touched.email && props.errors.email && (
                        <FormValidationMessage>
                          {props.errors.email}
                        </FormValidationMessage>
                      )}
                    </View>
                    <View style={styles.fieldContainer}>
                      <FormLabel>Password</FormLabel>
                      <FormInput
                        textContentType="password"
                        secureTextEntry
                        underlineColorAndroid="#00ccbb"
                        inputStyle={styles.input}
                        onChangeText={props.handleChange("password")}
                        onBlur={props.handleBlur("password")}
                        value={props.values.password}
                      />
                      {props.touched.password && props.errors.password && (
                        <FormValidationMessage>
                          {props.errors.password}
                        </FormValidationMessage>
                      )}
                    </View>
                    <Button
                      title="Login"
                      buttonStyle={[styles.button, styles.primary]}
                      loading={loading}
                      onPress={props.handleSubmit}
                    />
                    <Button
                      title="Signup"
                      buttonStyle={[styles.button, styles.secondary]}
                      onPress={this.goToSignup}
                    />
                    <Button
                      title="Forgot password?"
                      color="#2e3333"
                      buttonStyle={styles.link}
                      onPress={this.goToForgotPassword}
                    />
                  </View>
                </ScrollView>
              )}
            </Formik>
            {Platform.OS === "ios" && <KeyboardSpacer />}
          </>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: "100%"
  },
  heading: {
    marginBottom: 16,
    textAlign: "center"
  },
  fieldContainer: {
    marginBottom: 16
  },
  input: {
    margin: 0,
    width: "100%"
  },
  button: {
    marginBottom: 16
  },
  primary: {
    backgroundColor: "#00ccbb"
  },
  secondary: {},
  link: {
    backgroundColor: "transparent"
  }
});

export default LoginScreen;
