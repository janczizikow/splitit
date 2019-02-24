import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import {
  AuthLoadingScreen,
  LoginScreen,
  SignupScreen,
  ForgotPasswordScreen,
  HomeScreen,
  SearchScreen,
  AccountScreen,
  SettingsScreen,
  CreateGroupScreen
} from "../screens";
import theme from "../utils/theme";

const navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CreateGroup: CreateGroupScreen
  },
  {
    initialRouteName: "Home",
    navigationOptions
  }
);

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Account",
    navigationOptions: ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }

      return {
        tabBarVisible
      };
    }
  }
);

const AppTabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchScreen,
    Account: AccountStack
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        if (routeName === "Home") {
          iconName = `home`;
        } else if (routeName === "Search") {
          iconName = `search`;
        } else if (routeName === "Account") {
          iconName = `user`;
        }
        // @ts-ignore
        return <Icon name={iconName} size={26} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.primary,
      inactiveTintColor: theme.colors.textColor
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: "Login"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppTabs,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(AppNavigator);
