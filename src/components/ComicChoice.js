import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet, Button, Linking } from 'react-native';
import Inputs from './Inputs.js';
import Daughter from "../components/Daughter";
import Mother from "../components/Mother";

const QuizChoice = ({ scenarios }) => {
    // Current question and score
    const [q, setQuestion] = useState(scenarios[0]);
    const [s, setScore] = useState(0);

    // Update the question listing based on the current question and the score
    const update = (choice) => {
        // Update score
        setScore(s + q.score);

        // Update question from scenarios
        setQuestion(scenarios[choice]);
        return;
    }
    
    // Toggles display based on whether any of the question's choices are ""
    const hideOrShow = (choices, index, choice) => {
        // No choice at index, so render nothing
        if (choices[index] == undefined) { return; }

        // Choice is not empty, so render Button
        return (
            <Button 
                style={styles.margin}
                title={choices[index]}
                onPress={() => {update(choice)}}
            />
        );
    }

    const renderText = (prop, style) => {
        // prop was defined in the object
        if (prop != undefined) {
            return (
                <Text style={style}>{prop}</Text>
            );
        }
        // prop was not defined, don't render anything
        return;
    }

    const renderButton = (index, text) => {
        return (
            <Button 
                style={styles.margin}
                title={text}
                onPress={() => {update(index)}}
            />
        );
    }

    const renderScore = (score) => {
        return (
            <Text style={styles.scoreStyle}>Score: {score}</Text>
        );
    }

    const renderQuestion = (question) => {
        // This is background information, no dialogue
        if (question.background != undefined) {
            return (
                <View style={styles.background}>
                    {renderText(question.background, styles.headerStyle)}
                    {renderButton(question.next, "Next")}
                </View>
            );
        }

        // This is scene text, no dialogue
        if (question.text != undefined) {
            return (
                <View style={styles.text}>
                    {renderText(question.text, styles.headerStyle)}
                    {renderButton(question.next, "Next")}
                </View>
            );
        }

        // This is a dialogue, with/without choices
        return (
            <View style={styles.column}>
                {/* dialogue box */}
                <View style={styles.rowItem}>
                    <Text style={styles.textStyle}>Hello world!!</Text>
                </View>
                {/* avatar */}
                <View style={styles.rowItem}>
                    <Daughter />
                </View>
                {/* options, next */}
                <View style={styles.rowItem}>
                    <Text style={styles.textStyle}>Hello world!</Text>
                    {renderButton(question.next, "Next")}
                </View>
            </View>
        );
    }

    // Currently renders 4 choices, but can add more
    // Given how hideOrShow works
    return (
        <ScrollView>
            {renderScore(s)}
            {renderQuestion(q)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: {
        borderWidth: 5,
        padding: 20,
        fontSize: 30,
        flex: 1,
    },
    headerStyle : {
        fontSize: 20
    }, 
    textStyle: {
        fontSize: 15
    },
    listStyle: {
        fontSize: 15
    },    
    scoreStyle: {
        fontSize: 25
    }, 
    padding: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    margin: {
        marginBottom: 20, 
    },
    column: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    rowItem: {
        flex: 1,
    },
});

export default QuizChoice;


