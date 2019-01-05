import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import {
  AuthLoadingScreen,
  LoginScreen,
  SignupScreen,
  ForgotPasswordScreen,
  HomeScreen
} from "../screens";

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: "Login"
    // headerMode: "none"
  }
);

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
