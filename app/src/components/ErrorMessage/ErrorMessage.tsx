import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { ErrorResponse } from "apollo-link-error";
import theme from "../../utils/theme";

interface Props {
  error?: {} | ErrorResponse;
}

const ErrorMessage: React.FunctionComponent<Props> = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i: number) => (
      <View key={i} style={styles.container}>
        <Text style={styles.errorText}>
          <Text style={styles.strong}>Error</Text>{" "}
          {error.message.replace("GraphQL error: ", "")}
        </Text>
      </View>
    ));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        <Text style={styles.strong}>Error!</Text>{" "}
        {error.message.replace("GraphQL error: ", "")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 12,
    marginBottom: 24,
    textAlign: "center",
    backgroundColor: theme.colors.errorBg
  },
  errorText: {
    color: theme.colors.error
  },
  strong: {
    fontWeight: "bold"
  }
});

export default ErrorMessage;
