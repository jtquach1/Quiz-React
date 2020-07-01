# Intergenerational game
Two-player learning module game on adolescent health for Android and iOS. Involves topics on STI prevention and relationships.

# Documentation
## File hierarchy
* You can view the file hierarchies in /directoryList.md and /directoryList_truncated.md. 
    - Credit goes to https://stackoverflow.com/a/28832740/11854449 for the tree generator. 
    - View the file directly in a text editor, like VS Code. GitHub's Markdown renderer will show the contents as completely inline and untabbed. That being said...
* __Feel free to ignore everything inside node_modules, .expo, .expo-shared, and web-build__. These folders came with project creation command `expo init`. 
    - node_modules contains all the dependencies used in the local build. These are not visible on GitHub repo, but you can find the dependencies in /package.json. 
    - /package.json is automatically modified whenever you add a package to the project using `npm install`. When you clone this repository, you can do `expo start` in the repository directory and view the error messages to determine which packages are needed for installation. 
    - `expo start` is what initiates the build, and a window will pop up in your web browser for debugging. 
* __NOTE__: I used VS Code on Windows 10, so if there are issues with CRLF, feel free to remove/convert them to LFs. 

### How to build for Android, iOS
* See https://docs.expo.io/workflow/expo-cli/ for more details.
    - You need an Apple Developer subscription to be able to build an .ipa for a real iOS device.
    - You can build a .apk for free for a real Android device.

## Important files
### These files are _crucial_ to the current build's rendering of the daughter chlamydia scenario, which is newer, but uses _statically created_ mp4s using Animaker:
* /App.js
* /src/components/ComicChoice.js
* /src/scenarios/ComicScenarios.js
* /src/screens/ComicScreen.js
* /src/screens/HomeScreen.js
* /src/screens/MenuScreen.js
* /assets/backgrounds/gettyimages-1165365520-612x612.jpg
    - __Warning__: This is copyrighted, but taken from the Animaker selection of images when using the search term `kitchen`. 
* /assets/videos/scenario_6_1.mp4
* /assets/videos/scenario_6_2.mp4
* /assets/videos/scenario_6_3_1.mp4
* /assets/videos/scenario_6_3_2.mp4
* /assets/videos/scenario_6_4.mp4
* /assets/videos/scenario_6_5.mp4
* /assets/videos/scenario_6_6.mp4
* /assets/videos/scenario_6_7.mp4
* /assets/videos/scenario_6_8.mp4
* /assets/videos/scenario_6_9.mp4
* /assets/videos/scenario_6_10.mp4

### These files and directories are _crucial_ to the current build's rendering of the mother chlamydia scenario, which is older, but may be useful to reference for _real-time rendering_:
* /App.js
* /src/avatars/Daughter.js
* /src/avatars/Friend.js
* /src/avatars/Mother.js
* /src/avatars/TestAvatar.js
* /src/components/ComicChoice.js
* /src/scenarios/ComicScenarios.js
* /src/screens/ComicScreen.js
* /src/screens/HomeScreen.js
* /src/screens/MenuScreen.js
* Directories, where the .gif have numbers (1-7) as their names:
    - /assets/avatars/daughter
    - /assets/avatars/mother
    - /assets/avatars/friend

### These files and directories were used for a basic survey-like style of the original scenarios. The original scenarios are not rendered in the current build. 
* /App.js
* /src/components/Inputs.js
    - Not used in current build
* /src/components/QuizChoice.js
    - Superceded by ComicChoice
* /src/scenarios/Scenarios.js
    - Superceded by ComicScenarios
* /src/screens/QuizScreen.js
    - Superceded by ComicScreen
* /assets/avatars/daughter/png
    - As seen in Daughter.js
* /assets/avatars/mother/png
    - As seen in Mother.js
* /assets/avatars/friend/png
    - As seen in Friend.js

### These files were used to test that .gif may be embedded.
* All non-numbered .gif in /assets/avatars/daughter
* All non-numbered .gif in /assets/avatars/mother
* All non-numbered .gif in /assets/avatars/friend

## What resources did you use, and why?
### Brief overview
* Avatar .png: https://getavataaars.com
    - Why: Initially used for the idea of rendering avatars based on user-inputted options. However, it may be that avataaars won't be used anymore since they are just portraits and not full body models. 
* Avatar .gif: Mixamo (free), Adobe Fuse (free)
    - Why: Initially used for the idea of rendering moving avatars which use the avataaars .png as frames. 
* Video .mp4: Animaker (free)
    - Why: Used in current build, for showing a prerendered interaction between voiced mother/daughter full body avatars. This may be replaced in hopes for a real-time rendered interaction. 
* React Native .js: Udemy (paid tutorial)
    - Why: To learn the basics of React Native, for Android and iOS development, and Hooks for passing props from a parent component to a child component. The tutorial also emphasizes a function programming style by using the `const` keyword instead of `var`, `let` in object-oriented programming. 
    - The overview below explains the JSX used; JSX is very similar to HTML, and is discussed in the tutorial.  
    - Link to course: https://www.udemy.com/course/the-complete-react-native-and-redux-course/

### Detailed overview of app code
#### /App.js
Navigation imports, as explained in the Udemy tutorial. These allow for the user to go back a page by clicking the left arrow at the top of the screen. 
```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```

Custom imports to different Screen components, which render multiples of Choice components.
```js
import HomeScreen from "./src/screens/HomeScreen";
import MenuScreen from './src/screens/MenuScreen';
import QuizScreen from "./src/screens/QuizScreen";
import ComicScreen from './src/screens/ComicScreen';
```

Supply the Screen components to navigate through and the Screen that appears when first starting up the app.
```js
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
```

#### /src/screens/HomeScreen.js
The starting screen, where the user presses on one of two buttons to play as the mother or the daughter. 

Default imports. 
```js
import React from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
```

Custom imports. 
```js
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";
```

Only considers the navigation prop from HomeScreen's props. The {} inside the function arguments is used for destructuring. 
```js
const HomeScreen = ({ navigation }) => {
```

Takes in a String title and a boolean isMother. isMother is passed down to MenuScreen and is used to conditionally render the mother or the daughter scenarios based on what button the user clicks. 
```js
  const makeButton = (title, isMother) => {
```

Button and TouchableOpacity are introduced in Section 4 of the Udemy tutorial.
* onPress takes in a lambda function. 
    - navigation.navigate() takes in two arguments: 
        1. String referring to a String mapped to a component listed in the first argument of createStackNavigator in /App.js; e.g. Menu
        2. An object designated by the {}, which is a prop to be passed into the component; e.g. MenuScreen. 
* title is a prop of Button
    - title must be a String.
    - Props can be thought of as _arguments_ to the function Button, where it is supplied to generate a component on the screen.
```js
    return (
      <Button
        onPress={() => {
          navigation.navigate("Menu", {
            flag: isMother,
          });
        }}
        title={title}
      />
    );
  }
```

Here, we render the mother and daughter options sequentially. A ScrollView encapsulates everything to allow the user to scroll in case the generated content is too long for the screen. 
Other key features:
* The style prop is an argument to the View component. This is the syntax for using multiple styles: `{[styles.style1, styles.style2, styles.style3]}`. This is the syntax for using one style: `{styles.style1}`.
* To make an inline call to JavaScript code, you can surround the code in {}, as demonstrated with the calls to `makeButton`. 
    - For debugging purposes, you can also do `{console.log("foo: ", foo)}` to keep track of the value of certain variables. 
* Mother and Daughter components are used from the custom imports. 
```js
  // Generate scenarios based on id
  return (
    <ScrollView>
      <View style={[styles.column, styles.margin]}>
        <View style={styles.margin}>
          {makeButton("Play as mother", true)}
          <Mother />
        </View>
        <View style={styles.margin}>
          {makeButton("Play as daughter", false)}
          <Daughter />
        </View>
      </View>
    </ScrollView>
  );
};
```

A StyleSheet containing multiple rules for styling the above rendered JSX. 
* The StyleSheet syntax is very similar to CSS.
* Styling rules are separated by : and , like so
    - Because this is JavaScript, you can have a trailing comma following the last rule with no consequence.
```js
style1: {
    key1: value1,
    key2: value2
}
```

* You can learn more about alignItems and flexDirection in Section 7 of the Udemy tutorial. 
```js
const styles = StyleSheet.create({
  margin: {
    marginVertical: 20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  column: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default HomeScreen;
```

#### /src/screens/MenuScreen.js
The main menu for scenario listings. The current build only shows 1 scenario for the mother and daughter. 

Default imports.
```js
import React from "react";
import { Text, StyleSheet, Button, ScrollView } from "react-native";
```

MenuScreen, which contains parameters like HomeScreen.
```js
const MenuScreen = ({ navigation }) => {
```

Logic for getting params from MenuScreen, based on the React Navigation guide.
* Guide: https://reactnavigation.org/docs/1.x/params/
* Updated source code as of 5/14/2020: https://snack.expo.io/@react-navigation/navigate-with-params
* Ternary statements, which is used: 
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    - Section 6 of the Udemy tutorial
```js
  // from HomeScreen.js
  const { params } = navigation.state;
  // Checks if player is mother or not
  const flag = params ? params.flag : null;
  // checks who is current player
  console.log("Is current player mother? ", flag);
```

Currently unused in the current build, but this is for the scenarios listed in /src/scenarios/Scenarios.js
```js
  // Generic scenario, non-interactive
  const makeButton = (id) => {
    return (
      <Button
        onPress={() => {
          navigation.navigate("Quiz", {
            itemId: id,
          });
        }}
        title={"Scenario " + id}
      />
    );
  }
```

This is for the scenarios listed in /src/scenarios/ComicScenarios.js
```js
  // Interactive scenario, pass flag down
  const makeNew = (id, title) => {
    return (
      <Button
        onPress={() => {
          navigation.navigate("Comic", {
            itemId: id,
            // Pass down who the current player is
            flag,
          });
        }}
        title={title}
      />
    );
  }
```

The calls to makeButton are commented out. They can be recommented harmlessly. makeButton renders a button that navigates the user to an instance of the QuizScreen page.
```js
  // Generate scenarios based on id
  return (
    <ScrollView style={[styles.marginHorizontal]}>
      {/* <Text style={[styles.text, styles.marginVertical]}>Quiz Text Demos</Text>
      {makeButton(1)}
      {makeButton(2)}
      {makeButton(3)}
      {makeButton(4)}
      {makeButton(5)}
      {makeButton(6)}
      {makeButton(7)} */}
```

Calling makeNew renders a button that navigates the user to an instance of the ComicScreen page.
```js
      <Text style={[styles.text, styles.marginVertical]}>Quiz Dialogue Demos</Text>
      {makeNew(1, "Scenario 1")}
      {/* {makeNew(2, "Scenario 2")}
      {makeNew(3, "Scenario 3")} */}
    </ScrollView>
  );
};
```

The StyleSheet. 
```js
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  marginHorizontal: {
    marginHorizontal: 20,
  },
  marginVertical: {
    marginVertical: 20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});

export default MenuScreen;
```

#### /src/screens/ComicScreen.js
Default imports.
```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
```

Custom imports. The * refers to all the objects in the listed file.
```js
import ComicChoice from "../components/ComicChoice";
import * as scenarios from "../scenarios/ComicScenarios";
```

Similar logic as shown in MenuScreen.js. The symbolic constant isMother is used to clarify the code. 
```js
const ComicScreen = ({ navigation }) => {
  // From HomeScreen
  const { params } = navigation.state;
  const itemId = params ? params.itemId : null;
  const flag = params ? params.flag : null;
  const isMother = true;
```

Calls ComicChoice with `scenarios` being the object M6 from ComicScenarios as
```js
  const renderMother = (index) => {
    switch (index) {
      case 1:
        return <ComicChoice scenarios={scenarios.M6} />;
      // For error handling
      default:
        return <View><Text>Scenario not rendered</Text></View>
    }
  }
```

Similar to above.
```js
  const renderDaughter = (index) => {
    switch (index) {
      // Test out video
      case 1:
        return <ComicChoice scenarios={scenarios.D6} />;
      // For error handling
      default:
        return <View><Text>Scenario not rendered</Text></View>
    }
  }
```

Ternary statement to render a ComicChoice based on a particular object from ComicScenario. 
```js
  const renderScenario = (index) => {
    return (flag == isMother)
      ? renderMother(index)
      : renderDaughter(index);
  }

  return (
    renderScenario(itemId)
  );
};
```

More boilerplate code.
```js
const styles = StyleSheet.create({});

export default ComicScreen;
```

#### /src/components/ComicChoice.js
Default imports.
```js
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
```

Custom imports.
```js
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";
import Friend from "../avatars/Friend";
import TestAvatar from "../avatars/TestAvatar";
```

Used to render a video on the screen for _both_ Android and iOS. 
```js
import { Video, Audio } from "expo-av";
```

Used to render Google fonts instead of manually downloading and writing code to render them. See https://github.com/expo/google-fonts for more information on importing and styling components that use Google Fonts.
```js
import {
  useFonts,
  Arvo_700Bold
} from "@expo-google-fonts/arvo";
import { LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
```

Takes in scenarios as supplied in ComicScreen.js. 
```js
// scenarios: array populated by question objects
const ComicChoice = ({ scenarios }) => {

  // use index == -1 for button that leads to results page
  const FINAL = -1;
```

Using `const` instead of `let` got rid of the error stating the fonts were not loaded yet.
```js
  // Hook to use imported fonts
  const [fontsLoaded] = useFonts({
    Arvo_700Bold,
    LuckiestGuy_400Regular,
  });
```

Hooks which let you initialize and modify state. 
* Hooks are introduced and discussed in Section 6 of the Udemy tutorial. 
```js
  // Current question, score, gameOver status
  const [q, setQuestion] = useState(scenarios[0]);
  const [s, setScore] = useState(0);
  const [g, setGameOver] = useState(false);
```

It is valid to return null in a ternary statement, and it shouldn't affect the state.
```js
  // Update the question listing based on the current question and the score
  const update = (index) => {

    // Update overall score if question score is defined
    q.score != undefined ? setScore(s + q.score) : null;

    // Reached final question, do not update scenario
    q.gameOver ? setGameOver(true) : null;

    // Update question from scenarios
    setQuestion(scenarios[index]);
    return;
  }
```

Takes in a String prop and a style, which is an object containing key value pairs. 
```js
  const renderText = (prop, style) => {
    // if prop was defined, render it
    return (prop != undefined)
      ? <Text style={style}>{prop}</Text>
      : null;
  }

```

The ternary statement's truthy condition asks:
* When we subscript the input `scenarios` with the given index, do we get an object back?
* AND Is the index the specified magic number FINAL, which indicates whether the next page should be a game over?
* OR is there no supplied `text`?
If the truthy condition returns true, then no button is rendered.
```js
  // Basic blue button
  const renderButton = (index, text) => {
    /* 
    * Are c1, c2, c3, c4 valid indices? 
    * Does the button lead to the results screen?
    * Is there no text at the given index in the scenario?
    */
    return ((scenarios[index] == undefined && index != FINAL) || text == undefined)
      ? null
      : <Button
        title={text}
        onPress={() => { update(index) }} />;
  }

```

Similar logic as above, but prettier, and you can play with the margin and padding. 
```js
  // Stylized button for question choices
  const renderButton2 = (index, text, option) => {
    return ((scenarios[index] == undefined && index != FINAL) || text == undefined)
      ? null
      : <View style={styles.rowItem}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => { update(index) }}>
          <Text style={styles.buttonText}>Option {option}</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>{text}</Text>
      </View>
  }
```

Renders a number `score` in a Text tag. 
```js
  const renderScore = (score) => {
    return (
      <Text style={[styles.scoreStyle]}>
        Score: {score}
      </Text>
    );
  }
```

Currently used for the Mother version of the scenario, which is .gif based. 
```js
  const renderAvatar = (speaker, emotion) => {
    switch (speaker) {
      case 'Daughter':
        return <Daughter emotion={emotion} />;
      case 'Mother':
        return <Mother emotion={emotion} />;
      case 'Friend':
        return <Friend emotion={emotion} />;
      default:
        return <TestAvatar emotion={emotion} />;
    }
  }
```

This contains lots of inline JavaScript and ternary statements. Common components are rendered. renderRow is then used in renderQuestion for easier reading.
```js
  const renderRow = (question) => {
    return (question.gameOver == true)
      // Final question -> results
      ? <View style={styles.rowItem}>
        {renderButton(FINAL, "See results")}
      </View>
      // Dialogue with choices -> options
      : (question.choices != undefined)
        ? <View style={styles.rowItem}>
          {renderButton2(question.c1, question.choices[0], 1)}
          {renderButton2(question.c2, question.choices[1], 2)}
          {renderButton2(question.c3, question.choices[2], 3)}
          {renderButton2(question.c4, question.choices[3], 4)}
        </View>
        // Dialogue without choices -> next
        : <View style={styles.rowItem}>
          {renderButton(question.next, "Next")}
        </View>;
  }
```

This contains even more inline JavaScript and ternary statements. renderQuestion renders everything important the user needs to see on the screen. `question` is one of many comma-separated objects within an object, e.g. D6, from ComicScenarios. 
```js
  const renderQuestion = (question) => {
    return (question.background != undefined)
```

This renders background information. D6 does not have any questions that contain the background key, but M6 does. 
```js
      // Background information, no dialogue
      ? <View style={styles.background}>
        {renderText("Background", styles.text)}
        {renderText(question.background, styles.text)}
        {renderRow(question)}
      </View>
      // Scene text, no dialogue
      : (question.text != undefined)
        ? <View style={styles.background}>
          {renderText("Scene text", styles.text)}
          {renderText(question.text, styles.text)}
          {renderRow(question)}
        </View>
```

This renders the speaker's name and their dialogue separated by a :, an Avatar from avataaars, and a series of blue buttons. 
```js
        // Render dialogue, avatar, and choices or next button
        : (question.speaker != undefined)
          ? <View style={styles.column}>
            <View style={[styles.rowItem, styles.rowOne]}>
              <Text style={styles.text}>
                {question.speaker}: {question.dialogue}
              </Text>
            </View>
            <View style={styles.rowItem}>
              {renderAvatar(question.speaker, question.emotion)}
            </View>
            {renderRow(question)}
          </View>
```

This renders an autoplayed video on the screen, without play/pause options, and a blue Next/See Results button. The video uses fixed dimensions, which were found using https://aarmstrong.org/content/aspect_ratio_calc.php. 
```js
          // Render video and next button
          : (question.video != undefined)
            ? <View style={styles.column}>
              <Video
                source={{ uri: question.video }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                style={styles.video} />
              {renderRow(question)}
            </View>
```

This renders a background with a series of curved red buttons and bolded text. 
```js
            // Render title, choices
            : <ImageBackground
              style={[styles.column, { width: "100%", height: "100%" }]}
              source={{ uri: question.bg }}>
              <View style={[styles.rowItem, styles.rowOne]}>
                {renderText(question.title, styles.titleText)}
              </View>
              {renderRow(question)}
            </ImageBackground>
  }
```

renderScreen encapsulates the contents of renderScore, renderQuestion with a ScrollView. 
* This allows the user to scroll down in case the contents go off the screen.
If the player is not on a penultimate screen, then the score shall not be shown. `g` represents the game over state for a given scenario. 
```js
  const renderScreen = () => {
    return (g == true)
      // Reached game over
      ? <ScrollView>
        {renderScore(s)}
        {renderText("You have reached the end of the game! Play again?", styles.text)}
      </ScrollView>
      /* 
      * Still have more questions to go through. 
      * Don't render score during game choices 
      */
      : <ScrollView>
        {renderQuestion(q)}
      </ScrollView>;
  }

  return renderScreen();
};
```

The StyleSheet. flex, flexDirection, and such are introduced in Section 7 of the Udemy tutorial. 
```js
const styles = StyleSheet.create({
  background: {
    borderWidth: 5,
    padding: 20,
    fontSize: 30,
    fontStyle: 'italic',
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  scoreStyle: {
    fontSize: 25,
    marginVertical: 20,
  },
  column: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  rowItem: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  rowOne: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    padding: 80,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  video: {
    width: 288,
    height: 512,
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
    color: "#2D2D2D",
    fontFamily: "LuckiestGuy_400Regular",
  },
  button: {
    backgroundColor: "rgb(238,84,84)",
    padding: 20,
    borderRadius: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontFamily: "LuckiestGuy_400Regular",
    fontSize: 20,
  },
  displayText: {
    textAlign: "center",
    color: "#2D2D2D",
    fontFamily: "Arvo_700Bold",
    fontSize: 15,
    marginVertical: 5,
  },
});

export default ComicChoice;
```

#### /src/avatars/Daughter.js
__NOTE__: Friend.js, Mother.js, and TestAvatar.js share very similar code.

Default imports
```js
import React from "react";
import { StyleSheet, Image } from "react-native";
```

Function Daughter takes in a prop `emotion`, which is an integer. Daughter returns an `Image`, which uses an asset with a hardcoded filepath. The filepath cannot be passed in as an argument. 
```js
// To destructure, use { arg1, arg2, ... } format, 
// and in parent, do <Daughter arg1=... arg2=... /> 
const Daughter = ({ emotion }) => {
  switch (emotion) {
    case 1:
      return <Image
        source={require("../../assets/avatars/daughter/1.gif")}
        style={[styles.image]} />;
    case 2:
      return <Image
        source={require("../../assets/avatars/daughter/2.gif")}
        style={[styles.image]} />;
    case 3:
      return <Image
        source={require("../../assets/avatars/daughter/3.gif")}
        style={[styles.image]} />;
    case 4:
      return <Image
        source={require("../../assets/avatars/daughter/4.gif")}
        style={[styles.image]} />;
    case 5:
      return <Image
        source={require("../../assets/avatars/daughter/5.gif")}
        style={[styles.image]} />;
    case 6:
      return <Image
        source={require("../../assets/avatars/daughter/6.gif")}
        style={[styles.image]} />;
    default:
      return <Image
        source={require("../../assets/avatars/daughter/png/1.png")}
        style={[styles.image]} />;
  }
};
```

Default styling for the Image, can modify height and width as desired.
```js
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,

  }
});

export default Daughter;
```
