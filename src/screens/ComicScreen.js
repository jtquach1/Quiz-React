import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComicChoice from "../components/ComicChoice";
import * as scenarios from "../components/ComicScenarios";

const ComicScreen = ({ navigation }) => {
    // From HomeScreen
    const { params } = navigation.state;
    const itemId = params ? params.itemId : null;
    const flag = params ? params.flag : null;
    const isMother = true;

    console.log("itemId: ", itemId);
    console.log("flag: ", flag);
    console.log("isMother: ", isMother);


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
                return <ComicChoice scenarios={ scenarios.D6 } />;
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