import React, { PureComponent } from "react";
import { AsyncStorage, View, StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { List, ListItem, Text, Avatar } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import theme from "../utils/theme";
import User from "../components/User";

const list = [
  {
    title: "Settings",
    icon: "settings"
  },
  {
    title: "Logout",
    icon: "power_settings_new"
  }
];

class AccountScreen extends PureComponent<NavigationScreenProps> {
  static navigationOptions = () => ({
    title: "Account"
  });

  goToSettings = () => {
    this.props.navigation.navigate("Settings");
  };

  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  pickAvatar = () => {
    ImagePicker.showImagePicker({ title: "Select Avatar" }, response => {
      if (response.didCancel) {
        // ?
      } else if (response.error) {
      } else {
        // mutation
      }
    });
  };

  render() {
    return (
      <View style={styles.root}>
        <User>
          {({ data, loading }) => (
            <View style={styles.inner}>
              <View style={styles.row}>
                {data.me && (
                  <>
                    <Text h4>{data.me.name}</Text>
                    <Avatar
                      rounded
                      title={data.me.name[0]}
                      source={{ uri: data.me.avatar }}
                      width={48}
                      height={48}
                      onPress={this.pickAvatar}
                    />
                  </>
                )}
              </View>
            </View>
          )}
        </User>
        <List containerStyle={styles.container}>
          {list.map(item => (
            <ListItem
              key={item.title}
              title={item.title}
              leftIcon={{ name: item.icon }}
              containerStyle={styles.listItem}
              onPress={
                item.title === "Settings" ? this.goToSettings : this.logout
              }
            />
          ))}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  inner: {
    paddingHorizontal: 8,
    width: "100%"
  },
  row: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  container: {
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 1,
    backgroundColor: theme.colors.lightGreyBg
  },
  listItem: {
    backgroundColor: "#fff"
  }
});

export default AccountScreen;
