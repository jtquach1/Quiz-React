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
        checkAnswer(choice);
        setQuestion(scenarios[choice]);
        return;
    }

    // Check if an answer is correct
    // NOT WORKING!!!
    const checkAnswer = (choice) => {
        if (choice == q.answer) {
            setScore(score + 5);
            console.log(score);
        }
        return;
    }
    
    // Toggles display based on whether any of the question's choices are ""
    const hideOrShow = (question, index) => {
        // Choice is empty string, so render nothing
        if (question.choices[index] == "") {
            return;
        }
        // Choice is not empty, so render Button
        switch (index) {
            case 0:
                return <Button style={styles.margin} title={q.choices[0]} onPress={() => {update(q.c1)}} />;
            case 1:
                return <Button style={styles.margin} title={q.choices[1]} onPress={() => {update(q.c2)}} />; 
            case 2:
                return <Button style={styles.margin} title={q.choices[2]} onPress={() => {update(q.c3)}} />;
            case 3:
                return <Button style={styles.margin} title={q.choices[3]} onPress={() => {update(q.c4)}} />;
        }
    }

    // Checks if a question is the final one for its scenario
    const isFinal = (question) => {
        return question.isFinal;
    }

    return (
        <View style={styles.padding}>
            <Text style={[styles.scoreStyle, styles.margin]}>Score: {score}</Text>
            <Text style={[styles.textStyle, styles.margin]}>{q.question}</Text>
            {hideOrShow(q, 0)}
            {hideOrShow(q, 1)}
            {hideOrShow(q, 2)}
            {hideOrShow(q, 3)}
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