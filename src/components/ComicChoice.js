import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, ImageBackground, } from 'react-native';
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";
import Friend from "../avatars/Friend";
import TestAvatar from "../avatars/TestAvatar";

// scenarios: array populated by question objects
const ComicChoice = ({ scenarios }) => {

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

    const renderButton = (index, text) => {
        // are c1, c2, c3, c4 valid indices? 
        return (scenarios[index] == undefined || text == undefined)
            ? null
            : <Button 
                style={styles.margin}
                title={text}
                onPress={() => {update(index)}} />;
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
                <Button 
                    style={styles.margin}
                    title={"See results"}
                    onPress={() => {update(-1)}} 
                />
            </View>
            // Dialogue with choices -> options
            : (question.choices != undefined)
            ? <View style={styles.rowItem}>
                {renderButton(question.c1, question.choices[0])}
                {renderButton(question.c2, question.choices[1])}
                {renderButton(question.c3, question.choices[2])}
                {renderButton(question.c4, question.choices[3])}
            </View>
            // Dialogue without choices -> next
            : <View style={styles.rowItem}>
                {renderButton(question.next, "Next")}
            </View>;
    }

    const renderQuestion = (question) => {
        const image = { uri: "https://images.all-free-download.com/images/graphiclarge/kitchen_decor_background_modern_design_6835820.jpg" };
        const image_2 = { uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bfecda6c-9d92-43b7-9298-1adce731f786/d1yu2e4-f581f411-6fa7-46e6-886a-15ee8d88b27a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9iZmVjZGE2Yy05ZDkyLTQzYjctOTI5OC0xYWRjZTczMWY3ODYvZDF5dTJlNC1mNTgxZjQxMS02ZmE3LTQ2ZTYtODg2YS0xNWVlOGQ4OGIyN2EuanBnIn1dXX0.knCqlyLquI2frFxqwj_elWH0s0YNWVgi7UmYByMOWBs" };

        return (question.background != undefined)
            // Background information, no dialogue
            ? <View style={styles.background}>
                {renderText("Background", styles.text)}
                {renderText(question.background, styles.text)}
                <ImageBackground source={image_2} style={styles.image} />
                {renderButton(question.next, "Next")}
            </View>
            // Scene text, no dialogue
            : (question.text != undefined)
            ? <View style={styles.background}>
                {renderText("Scene text", styles.text)}
                {renderText(question.text, styles.text)}
                <ImageBackground source={image_2} style={styles.image} />
                {renderButton(question.next, "Next")}
            </View>
            // Render dialogue, avatar, buttons
            : <View style={styles.column}>
                <View style={[styles.rowItem, styles.rowOne]}>
                    <Text style={styles.text}>
                        {question.speaker}: {question.dialogue}
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <ImageBackground source={image_2} style={styles.image}>
                        {renderAvatar(question.speaker, question.emotion)}
                    </ImageBackground>
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
                {renderScore(s)}
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
});

export default ComicChoice;