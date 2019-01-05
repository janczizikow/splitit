import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export default class SignupScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: "Signup",
    headerBackTitle: null
  });

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
