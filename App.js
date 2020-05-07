import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Quiz: QuizScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
