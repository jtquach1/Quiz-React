import React from 'react';
import { StyleSheet } from 'react-native';
import QuizChoice from "../components/QuizChoice";
import { scenario_1, scenario_2, scenario_custom } from "../components/Scenarios";

const QuizScreen = () => {

    // console.log("--------- Printing out all scenarios for debugging");
    // console.log(scenarios);
    // console.log("--------- Done printing all scenarios");

    const renderScenario = ( index ) => {
        switch (index) {
            case 1:
                return <QuizChoice scenarios={ scenario_1 } />;
            case 2: 
                return <QuizChoice scenarios={ scenario_2 } />;
            // case 3: 
                // return <QuizChoice scenarios={ scenario_3 } />;
        }
    }

    return (
        // RENDER ONE QUESTION AT A TIME
        renderScenario(2)
    );
};

const styles = StyleSheet.create({});

export default QuizScreen;