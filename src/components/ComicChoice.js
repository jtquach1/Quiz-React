import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet, Button, Linking } from 'react-native';
import Inputs from './Inputs.js';
import Daughter from "../components/Daughter";
import Mother from "../components/Mother";

const QuizChoice = ({ scenarios }) => {
    // Current question and score
    const [q, setQuestion] = useState(scenarios[0]);
    const [score, setScore] = useState(0);

    // Update the question listing based on the current question and the score
    const update = (choice) => {
        // Update score
        setScore(score + q.score);

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

    const renderQuestion = (question) => {
        // This is an infobox
        if (question.isInfobox == true) {
            return (
                <View style={styles.margin}>
                    <Text style={[styles.scoreStyle, styles.margin]}>Score: {score}</Text>
                    {renderText(question.h1, styles.headerStyle)}
                    {renderText(question.p1, styles.textStyle)}
                    {renderText(question.h2, styles.headerStyle)}
                    {question.list.split('|').map((item, key) => 
                        <Text key={key} style={[styles.listStyle]}>
                            {'\u2022'}
                            {item}
                        </Text>)}
                    {renderText(question.h3, styles.headerStyle)}
                    {renderText(question.p2, styles.textStyle)}
                    {renderText(question.resourceText, styles.headerStyle)}
                    {renderText(question.resourceLink, styles.textStyle)}
                </View>
            );
        }
        // This is a question
        return (
            <View>
                <Text style={[styles.scoreStyle, styles.margin]}>Score: {score}</Text>
                <Text style={[styles.textStyle, styles.margin]}>{q.question}</Text>
            </View>
        );
    }

    // Currently renders 4 choices, but can add more
    // Given how hideOrShow works
    return (
        <ScrollView>
            <View style={styles.column}>
                {/* dialogue box */}
                <View style={styles.rowItem}>
                    <Text style={styles.textStyle}>Hello world!</Text>
                </View>
                {/* avatar */}
                <View style={styles.rowItem}>
                    <Daughter />
                </View>
                {/* options, next */}
                <View style={styles.rowItem}>
                    <Text style={styles.textStyle}>Hello world!</Text>
                    <Text style={styles.textStyle}>Hello world!</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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


