import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Daughter from "../components/Daughter";
import Mother from "../components/Mother";
import * as scenarios from "../components/ComicScenarios";


const ComicScreen = ({ navigation }) => {
    const { params } = navigation.state;
    const itemId = params ? params.itemId : null;

    const renderScenario = ( index ) => {
        switch (index) {
            case 1:
                return <QuizChoice scenarios={ scenarios.scenario_6D } />;
            // For error handling
            default:
                return <View><Text>Scenario not rendered</Text></View>
        }
    }


    return (
        renderScenario(itemId)
    );
};

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },

});

export default ComicScreen;