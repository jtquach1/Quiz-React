import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import MenuScreen from './src/screens/MenuScreen';
import QuizScreen from "./src/screens/QuizScreen";
import ComicScreen from './src/screens/ComicScreen';

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Menu: MenuScreen,
        Quiz: QuizScreen,
        Comic: ComicScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App"
        }
    }
);

export default createAppContainer(navigator);
