import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, } from 'react-native';
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";
import Friend from "../avatars/Friend";
import TestAvatar from "../avatars/TestAvatar";

const ComicChoice = ({ scenarios }) => {
    // scenarios: array populated by question objects

    // Current question and score
    // const [q, setQuestion] = useState(scenarios[0]);
    const [q, setQuestion] = useState(scenarios[56]); // debugging purposes
    const [s, setScore] = useState(0);

    // Update the question listing based on the current question and the score
    const update = (choice) => {
        // Update score
        // Score not defined in scenario object, then don't modify score
        if (q.score != undefined) {
            setScore(s + q.score);
        }

        // Update question from scenarios
        setQuestion(scenarios[choice]);
        return;
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
        // are c1, c2, c3, c4 valid indices? 
        if (scenarios[index] == undefined || text == undefined) {
            return;
        }

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
            <Text style={[styles.scoreStyle, styles.margin]}>
                Score: {score}
            </Text>
        );
    }

    const renderAvatar = (speaker) => {
        switch (speaker) {
            case 'Daughter':
                return <Daughter />;
            case 'Mother':
                return <Mother />;
            case 'Friend':
                return <Friend />;
            default:
                return <TestAvatar />;
        }
    }

    const renderWithChoices = (question) => {
        return (
            <View style={styles.column}>
                {/* dialogue box */}
                <View style={[styles.rowItem, styles.rowOne]}>
                    <Text style={styles.text}>
                        {question.speaker}: {question.dialogue}
                    </Text>
                </View>
                {/* avatar */}
                <View style={styles.rowItem}>
                    {renderAvatar(question.speaker)}
                </View>
                {/* options, next */}
                <View style={styles.rowItem}>
                    <Text>renderWithChoices</Text>
                    {renderButton(question.c1, question.choices[0])}
                    {renderButton(question.c2, question.choices[1])}
                    {renderButton(question.c3, question.choices[2])}
                    {renderButton(question.c4, question.choices[3])}
                </View>
            </View>
        );
    }

    const renderWithoutChoices = (question) => {
        return (
            <View style={styles.column}>
                {/* dialogue box */}
                <View style={[styles.rowItem, styles.rowOne]}>
                    <Text style={styles.text}>
                        {question.speaker}: {question.dialogue}
                    </Text>
                </View>
                {/* avatar */}
                <View style={styles.rowItem}>
                    {renderAvatar(question.speaker)}
                </View>
                {/* options, next */}
                <View style={styles.rowItem}>
                    <Text>renderWithoutChoices</Text>
                    {renderButton(question.next, "Next")}
                </View>
            </View>
        );
    }

    const renderQuestion = (question) => {
        // Background information, no dialogue
        if (question.background != undefined) {
            return (
                <View style={styles.background}>
                    {renderText(question.background, styles.text)}
                    {renderButton(question.next, "Next")}
                </View>
            );
        }

        // Scene text, no dialogue
        if (question.text != undefined) {
            return (
                <View style={styles.background}>
                    {renderText(question.text, styles.text)}
                    {renderButton(question.next, "Next")}
                </View>
            );
        }

        // Dialogue with choices
        if (question.choices != undefined) {
            return (renderWithChoices(question));
        }

        // Dialogue without choices
        return (renderWithoutChoices(question));
    }

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
        fontStyle: 'italic',
        flex: 1,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
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
        padding: 20,
    },
    margin: {
        marginVertical: 20, 
    },
    column: {
        alignItems: 'center',
        // flexDirection: 'column',
        justifyContent: 'space-between',
        height: 400,
    },
    rowItem: {
        // flex: 1,
    },
    rowOne: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',    
    }
});

export default ComicChoice;


