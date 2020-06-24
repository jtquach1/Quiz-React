import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";
import Friend from "../avatars/Friend";
import TestAvatar from "../avatars/TestAvatar";
import { Video } from "expo-av";
import { AppLoading } from "expo";
import {
    useFonts,
    Arvo_700Bold
} from "@expo-google-fonts/arvo";
import { LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";

// use index == -1 for button that leads to results page
const FINAL = -1;

// scenarios: array populated by question objects
const ComicChoice = ({ scenarios }) => {

    let [fontsLoaded] = useFonts({
        Arvo_700Bold,
        LuckiestGuy_400Regular,
    });

    // Current question, score, gameOver status
    const [q, setQuestion] = useState(scenarios[10]);
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

    const renderButton = (index, text) => {
        // are c1, c2, c3, c4 valid indices? 
        return ((scenarios[index] == undefined && index != FINAL) || text == undefined)
            ? null
            : <Button
                title={text}
                onPress={() => { update(index) }} />;
    }

    const renderButton2 = (index, text) => {
        // are c1, c2, c3, c4 valid indices? 
        return ((scenarios[index] == undefined && index != FINAL) || text == undefined)
            ? null
            : <TouchableOpacity
                style={styles.button}
                onPress={() => { update(index) }}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>;
    }

    const renderScore = (score) => {
        return (
            <Text style={[styles.scoreStyle, styles.margin]}>
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
                    {renderButton2(question.c1, question.choices[0])}
                    {renderButton2(question.c2, question.choices[1])}
                    {renderButton2(question.c3, question.choices[2])}
                    {renderButton2(question.c4, question.choices[3])}
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
                {renderButton(question.next, "Next")}
            </View>
            // Scene text, no dialogue
            : (question.text != undefined)
                ? <View style={styles.background}>
                    {renderText("Scene text", styles.text)}
                    {renderText(question.text, styles.text)}
                    {renderButton(question.next, "Next")}
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
                            {/* Debugging to get uri of video */}
                            {console.log("question.video", question.video)}

                            <Video
                                source={{ uri: question.video }}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                resizeMode="cover"
                                shouldPlay
                                style={styles.video}
                            />
                            {renderButton(question.next, "Next")}
                        </View>
                        // Render title, choices
                        : <View style={styles.column}>
                            <View style={[styles.rowItem, styles.rowOne]}>
                                {renderText(question.title, styles.title)}
                            </View>
                            {renderRow(question)}
                        </View>
    }

    const renderScreen = () => {
        return (g == true)
            // Reached game over
            ? <ScrollView>
                {renderScore(s)}
                <Text style={[styles.text, styles.margin]}>
                    You have reached the end of the game! Play again?
                </Text>
            </ScrollView>
            // Still have more questions to go through
            : <ScrollView>
                {/* Don't render score during game choices */}
                {/* {renderScore(s)} */}
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
    title: {
        fontSize: 20,
        marginVertical: 20,
        textAlign: "center",
    },
    scoreStyle: {
        fontSize: 25
    },
    padding: {
        padding: 20,
    },
    margin: {
        marginVertical: 20,
    },
    column: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    rowItem: {
        flex: 1,
        // height: 150,
        paddingHorizontal: 20,
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
    button: {
        marginVertical: 20,
        backgroundColor: "rgb(238,84,84)",
        padding: 20,
        borderRadius: 40,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontFamily: "LuckiestGuy_400Regular",
    }
});

export default ComicChoice;
