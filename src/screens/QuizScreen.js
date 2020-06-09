import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuizChoice from "../components/QuizChoice";
import * as scenarios from "../scenarios/Scenarios";

const QuizScreen = ({ navigation }) => {
    // from MenuScreen.js
    const { params } = navigation.state;
    const itemId = params ? params.itemId : null;

    const renderScenario = ( index ) => {
        switch (index) {
            case 1:
                return <QuizChoice scenarios={ scenarios.scenario_1 } />;
            case 2: 
                return <QuizChoice scenarios={ scenarios.scenario_2 } />;
            case 3: 
                return <QuizChoice scenarios={ scenarios.scenario_3 } />;
            case 4: 
                return <QuizChoice scenarios={ scenarios.scenario_4 } />;
            case 5: 
                return <QuizChoice scenarios={ scenarios.scenario_5 } />;
            case 6: 
                return <QuizChoice scenarios={ scenarios.scenario_6 } />;
            case 7: 
                return <QuizChoice scenarios={ scenarios.scenario_7 } />;
            // For error handling
            default:
                return <View><Text>Scenario not rendered</Text></View>
        }
    }

    // RENDER ONE QUESTION AT A TIME
    return (
        renderScenario(itemId)
    );
};

const styles = StyleSheet.create({});

export default QuizScreen;