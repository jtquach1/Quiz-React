import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ComicChoice from "../components/ComicChoice";
import * as scenarios from "../components/ComicScenarios";

const ComicScreen = ({ navigation }) => {
    const { params } = navigation.state;
    const itemId = params ? params.itemId : null;

    const renderScenario = ( index ) => {
        switch (index) {
            case 1:
                return <ComicChoice scenarios={ scenarios.scenario_6D } />;
            // For error handling
            default:
                return <View><Text>Scenario not rendered</Text></View>
        }
    }


    return (
        renderScenario(itemId)
    );
};

const styles = StyleSheet.create({});

export default ComicScreen;