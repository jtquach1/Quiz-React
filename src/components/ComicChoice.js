import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";
import Friend from "../avatars/Friend";
import TestAvatar from "../avatars/TestAvatar";
import { Video, Audio } from "expo-av";
import { AppLoading } from "expo";
import {
  useFonts,
  Arvo_700Bold
} from "@expo-google-fonts/arvo";
import { LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";

// scenarios: array populated by question objects
const ComicChoice = ({ scenarios }) => {

  // use index == -1 for button that leads to results page
  const FINAL = -1;

  // Hook to use imported fonts
  const [fontsLoaded] = useFonts({
    Arvo_700Bold,
    LuckiestGuy_400Regular,
  });

  // Current question, score, gameOver status
  const [q, setQuestion] = useState(scenarios[0]);
  const [s, setScore] = useState(0);
  const [g, setGameOver] = useState(false);

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

  const renderText = (prop, style) => {
    // if prop was defined, render it
    return (prop != undefined)
      ? <Text style={style}>{prop}</Text>
      : null;
  }

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

  const renderScore = (score) => {
    return (
      <Text style={[styles.scoreStyle]}>
        Score: {score}
      </Text>
    );
  }

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

  const renderQuestion = (question) => {
    return (question.background != undefined)
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
