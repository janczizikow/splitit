import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import theme from "../../utils/theme";

interface Props {
  children?: string;
}

const SuccessMessage: React.FunctionComponent<Props> = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.successText}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    marginHorizontal: 12,
    padding: 16,
    textAlign: "center",
    backgroundColor: theme.colors.successBg
  },
  successText: {
    color: theme.colors.success
  }
});

export default SuccessMessage;
