import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { AuthLoadingScreen, LoginScreen, HomeScreen } from "../screens";

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(AppNavigator);
