import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import Inputs from './Inputs.js';

const QuizChoice = ({ scenarios }) => {
    // Current question and score
    const [q, setQuestion] = useState(scenarios[0]);
    const [score, setScore] = useState(0);

    // Update the question listing based on the current question and the score
    const update = (choice) => {
        // Check if an answer is correct
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

    return (
        <SafeAreaView style={styles.padding}>
            <Text style={[styles.scoreStyle, styles.margin]}>Score: {score}</Text>
            <Text style={[styles.textStyle, styles.margin]}>{q.question}</Text>
            {hideOrShow(q.choices, 0, q.c1)}
            {hideOrShow(q.choices, 1, q.c2)}
            {hideOrShow(q.choices, 2, q.c3)}
            {hideOrShow(q.choices, 3, q.c4)}
            <Inputs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textStyle: {
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