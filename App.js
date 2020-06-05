import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";
import MenuScreen from './src/screens/MenuScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Menu: MenuScreen,
    Quiz: QuizScreen,
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
