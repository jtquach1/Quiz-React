import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import Inputs from './Inputs.js';
import { FlatList } from 'react-native-gesture-handler';

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

    // Checks if a question is the final one for its scenario
    const isFinal = (question) => {
        return question.isFinal;
    }

    const split = (string, delimiter) => {
        const arr = string.split(delimiter);
        
    }

    const renderQuestion = (question) => {
        // This is an infobox
        if (question.isInfobox == true) {
            return (
                <View style={styles.margin}>
                    <Text style={[styles.scoreStyle, styles.margin]}>Score: {score}</Text>
                    <Text style={styles.headerStyle}>{question.h1}</Text>
                    <Text style={styles.textStyle}>{question.p1}</Text>
                    <Text style={styles.headerStyle}>{question.h2}</Text>
                    {question.list.split('|').map((item, key) => 
                        <Text key={key} style={[styles.listStyle]}>
                            {'\u2022'}
                            {item}
                        </Text>)}
                    <Text style={styles.textStyle}>{question.p2}</Text>   
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
        fontSize: 30
    }, 
    textStyle: {
        fontSize: 15
    },
    listStyle: {
        fontSize: 20
    },    
    scoreStyle: {
        fontSize: 30
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