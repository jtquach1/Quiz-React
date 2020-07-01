# Intergenerational game
Two-player learning module game on adolescent health for Android and iOS. Involves topics on STI prevention and relationships.

# Documentation
## File hierarchy
* You can view the file hierarchy in /directoryList.md. That being said... 
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
* Avatar .png: https://getavataaars.com
    - Why: Initially used for the idea of rendering avatars based on options that the user supplies. However, it may be that avataaars won't be used anymore since they are just portraits and not full body models. 
* Avatar .gif: Mixamo (free), Adobe Fuse (free)
    - Why: Initially used for the idea of rendering moving avatars which use the avataaars .png as frames. 
* Video .mp4: Animaker (free)
    - Why: Used in current build, for showing a prerendered interaction between voiced mother/daughter full body avatars. This may be replaced in hopes for a real-time rendered interaction. 
* React Native .js: Udemy (paid tutorial)
    - Why: To learn the basics of React Native, for Android and iOS development, and Hooks for passing props from a parent component to a child component. The tutorial also emphasizes a function programming style by using the `const` keyword instead of `var`, `let` in object-oriented programming. 
    - Link to course: https://www.udemy.com/course/the-complete-react-native-and-redux-course/
