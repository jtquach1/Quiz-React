import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Inputs from './Inputs.js';

const QuizChoice = ({ scenarios }) => {
    // Current question to be displayed
    const [q, setQuestion] = useState(scenarios[0]);
    const [score, setScore] = useState(0);

    console.log(q);
    console.log(score);

    // Update the question listing based on the current question and the score
    const update = (choice) => {
        if (choice === q.answer) {
            setScore(score + 5);
        }
        setQuestion(scenarios[choice]);
    }
    // Check if an answer is correct
    const checkAnswer = (choice) => {
        if (choice === q.answer) {
            setScore(score + 5);
            console.log(score);
        }
        return;
    }
    
    return (
        <View style={styles.padding}>
            <Text style={[styles.scoreStyle, styles.margin]}>Score: {score}</Text>
            <Text style={[styles.textStyle, styles.margin]}>{q.question}</Text>
            <Button style={styles.margin} title={q.choices[0]} onPress={() => {update(q.c1)}} />
            <Button style={styles.margin} title={q.choices[1]} onPress={() => {update(q.c2)}} />
            <Button style={styles.margin} title={q.choices[2]} onPress={() => {update(q.c3)}} />
            <Button style={styles.margin} title={q.choices[3]} onPress={() => {update(q.c4)}} />
            <Inputs />
        </View>
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
    // marginHorizontal: 20,
    // marginVertical: 20
    // marginTop: 20,
    marginBottom: 20
  }
});

export default QuizChoice;