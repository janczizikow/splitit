import React, { PureComponent } from "react";
import { View, Alert } from "react-native";
import { Text, FormInput, Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { GROUPS_QUERY } from "./HomeScreen";

const CREATE_GROUP_MUTATION = gql`
  mutation createGroup($name: String!) {
    createGroup(name: $name) {
      id
      name
    }
  }
`;

class CreateGroupScreen extends PureComponent<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    title: "Create a Group",
    headerRight: <Button title="Save" onPress={() => alert("pressed")} />
  });

  state = {
    name: ""
  };

  handleChange = (text: string) => {
    this.setState({
      name: text
    });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_GROUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: GROUPS_QUERY }]}
      >
        {createGroup => (
          <View>
            <FormInput
              placeholder="Group name"
              underlineColorAndroid="#00ccbb"
              value={this.state.name}
              onChangeText={this.handleChange}
            />
            <Button title="Save" onPress={() => createGroup()} />
          </View>
        )}
      </Mutation>
    );
  }
}

export default CreateGroupScreen;
