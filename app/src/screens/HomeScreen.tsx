import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Button } from "react-native-elements";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "../components/ErrorMessage";

export const GROUPS_QUERY = gql`
  query groupsQuery {
    groups {
      name
    }
  }
`;

export default class HomeScreen extends PureComponent<NavigationScreenProps> {
  goToCreateGroup = () => {
    this.props.navigation.navigate("CreateGroup");
  };

  render() {
    return (
      <Query query={GROUPS_QUERY}>
        {({ data, loading, error }) => (
          <View>
            {/* {data.groups.map(group => (
              <Text>{group.name}</Text>
            ))} */}
            <ErrorMessage error={error} />
            <Text> HomeScreen </Text>
            <Button title="Create Group" onPress={this.goToCreateGroup} />
          </View>
        )}
      </Query>
    );
  }
}
