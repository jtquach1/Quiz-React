import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet, Button, Linking } from 'react-native';
import Inputs from './Inputs.js';

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
        // Choice is empty string, so render nothing
        if (choices[index] == "") { return; }

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

    return (
        <ScrollView>
            <SafeAreaView style={styles.padding}>
                {renderQuestion(q)}
                {hideOrShow(q.choices, 0, q.c1)}
                {hideOrShow(q.choices, 1, q.c2)}
                {hideOrShow(q.choices, 2, q.c3)}
                {hideOrShow(q.choices, 3, q.c4)}
                <Inputs />
            </SafeAreaView>
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
    }
});

export default QuizChoice;