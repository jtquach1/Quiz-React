import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComicChoice from "../components/ComicChoice";
import * as scenarios from "../scenarios/ComicScenarios";

const ComicScreen = ({ navigation }) => {
    // From HomeScreen
    const { params } = navigation.state;
    const itemId = params ? params.itemId : null;
    const flag = params ? params.flag : null;
    const isMother = true;

    const renderMother = (index) => {
        switch (index) {
            case 1:
                return <ComicChoice scenarios={ scenarios.M6 } />;
            // For error handling
            default:
                return <View><Text>Scenario not rendered</Text></View>
        }
    }

    const renderDaughter = (index) => {
        switch (index) {
            case 1:
                return <ComicChoice scenarios={ scenarios.D6_1 } />;
            // For testing scenarios
            case 2:
                return <ComicChoice scenarios={ scenarios.test1 } />;
            case 3:
                return <ComicChoice scenarios={ scenarios.test2 } />;

            // For error handling
            default:
                return <View><Text>Scenario not rendered</Text></View>
        }
    }

    const renderScenario = (index) => {
        return (flag == isMother)
            ? renderMother(index)
            : renderDaughter(index);
    }


    return (
        renderScenario(itemId)
    );
};

const styles = StyleSheet.create({});

export default ComicScreen;