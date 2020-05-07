import React from 'react';
import { StyleSheet } from 'react-native';
import QuizChoice from "../components/QuizChoice";
import { scenario_1, scenario_2, scenario_custom} from "../components/Scenarios";

const QuizScreen = () => {

    // console.log("--------- Printing out all scenarios for debugging");
    // console.log(scenarios);
    // console.log("--------- Done printing all scenarios");

    return (
        // RENDER ONE QUESTION AT A TIME
        <QuizChoice scenarios={scenario_1} />
    );
};

const styles = StyleSheet.create({});

export default QuizScreen;