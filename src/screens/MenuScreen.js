import React from "react";
import { Text, StyleSheet, Button, ScrollView } from "react-native";

const MenuScreen = ({ navigation }) => {
    // from HomeScreen.js
    const { params } = navigation.state;
    // Checks if player is mother or not
    const flag = params ? params.flag : null;
    // checks who is current player
    console.log("Is current player mother? ", flag);

    // Generic scenario, non-interactive
    const makeButton = (id) => {
        return (
            <Button
                onPress={() => {
                    navigation.navigate("Quiz", {
                        itemId: id,
                    });
                }}
                title={"Scenario " + id}
            />
        );
    }

    // Interactive scenario, pass flag down
    const makeNew = (id, title) => {
        return (
            <Button
                onPress={() => {
                    navigation.navigate("Comic", {
                        itemId: id,
                        // Pass down who the current player is
                        flag,
                    });
                }}
                title={title}
            />
        );
    }


    // Generate scenarios based on id
    return (
        <ScrollView style={[styles.marginHorizontal]}>
            {/* <Text style={[styles.text, styles.marginVertical]}>Quiz Text Demos</Text>
            {makeButton(1)}
            {makeButton(2)}
            {makeButton(3)}
            {makeButton(4)}
            {makeButton(5)}
            {makeButton(6)}
            {makeButton(7)} */}

            <Text style={[styles.text, styles.marginVertical]}>Quiz Dialogue Demos</Text>
            {makeNew(1, "Scenario 1")}
            {/* {makeNew(2, "Scenario 2")}
            {makeNew(3, "Scenario 3")} */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    padding: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    marginHorizontal: {
        marginHorizontal: 20,
    },
    marginVertical: {
        marginVertical: 20,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default MenuScreen;