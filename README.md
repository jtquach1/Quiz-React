# Intergenerational game
Two-player learning module game on adolescent health for Android and iOS. Involves topics on STI prevention and relationships.

# Documentation
## File hierarchy
* You can view the file hierarchy in /directoryList.md. That being said... 
* __Feel free to ignore everything inside node_modules, .expo, .expo-shared, and web-build__. These folders came with project creation command `expo init`. node_modules contains all the dependencies used in the local build. These are not visible on GitHub repo, but you can find the dependencies in /package.json. /package.json is automatically modified whenever you add a package to the project using `npm install`. When you clone this repository, you can do `expo start` in the repository directory and view the error messages to determine which packages are needed for installation. `expo start` is what initiates the build, and a window will pop up in your web browser for debugging. 
* NOTE: I used VS Code on Windows 10, so if there are issues with CRLF, feel free to remove/convert them to LFs. 

### How to build for Android, iOS
* See https://docs.expo.io/workflow/expo-cli/ for more details.

## Important files
### These files are _crucial_ to the current build's rendering of the daughter chlamydia scenario, which is newer:
* /App.js
* /src/components/ComicChoice.js
* /src/scenarios/ComicScenarios.js
* /src/screens/ComicScreen.js
* /src/screens/HomeScreen.js
* /src/screens/MenuScreen.js
* /assets/backgrounds/gettyimages-1165365520-612x612.jpg
** __Warning__: This is copyrighted, but taken from the Animaker selection of images when using the search term `kitchen`. 
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

### These files are _crucial_ to the current build's rendering of the mother chlamydia scenario, which is older:
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

### These files and directories were used for a basic survey-like style of the original scenarios. The original scenarios are not rendered in the current build. 
* /App.js
* /src/components/Inputs.js
** Not used in current build
* /src/components/QuizChoice.js
** Superceded by ComicChoice
* /src/scenarios/Scenarios.js
** Superceded by ComicScenarios
* /src/screens/QuizScreen.js
** Superceded by ComicScreen
* /assets/avatars/daughter/png
** As seen in Daughter.js
* /assets/avatars/mother/png
** As seen in Mother.js
* /assets/avatars/friend/png
** As seen in Friend.js

### These files were used to test that gifs may be embedded.
* All .gif in /assets/avatars/daughter
* All .gif in /assets/avatars/mother
* All .gif in /assets/avatars/friend
