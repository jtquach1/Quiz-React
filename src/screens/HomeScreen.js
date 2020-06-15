import React from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";

const HomeScreen = ({ navigation }) => {
    const makeButton = (title, isMother) => {
        return (
            <Button 
                onPress={() => {
                    navigation.navigate("Menu", {
                        flag: isMother,
                    });
                }}
                title={title} 
            />
        );
    }


    // Generate scenarios based on id
    return (
        <ScrollView>
                <View style={[styles.column, styles.margin]}>
                        <View style={styles.margin}>
                                {makeButton("Play as mother", true)}
                                <Mother />
                        </View>
                        <View style={styles.margin}>
                                {makeButton("Play as daughter", false)}
                                <Daughter />
                        </View>
                </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    margin: {
        marginVertical: 20,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    column: {
        alignItems: 'center',
        flexDirection: 'column',
    },
});

export default HomeScreen;