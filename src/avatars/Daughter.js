import React from "react";
import { StyleSheet, Image } from "react-native";

// To destructure, use { arg1, arg2, ... } format, 
// and in parent, do <Daughter arg1=... arg2=... /> 
const Daughter = ({ emotion }) => {
    switch (emotion) {
        case 1:
            return <Image 
                source={require("../../assets/avatars/daughter/idle_1.gif")}
                style={[styles.image]} />;
        case 2:
            return <Image 
                source={require("../../assets/avatars/daughter/idle_1.gif")}
                style={[styles.image]} />;
        case 3:
            return <Image 
                source={require("../../assets/avatars/daughter/sad.gif")}
                style={[styles.image]} />;
        case 4:
            return <Image 
                source={require("../../assets/avatars/daughter/idle_2.gif")}
                style={[styles.image]} />;
        case 5:
            return <Image 
                source={require("../../assets/avatars/daughter/sad.gif")}
                style={[styles.image]} />;
        case 6:
            return <Image 
                source={require("../../assets/avatars/daughter/idle_2.gif")}
                style={[styles.image]} />;
        default:
            return <Image 
                source={require("../../assets/avatars/daughter/png/1.png")}
                style={[styles.image]} />;
    }
};

const styles = StyleSheet.create({
    image: {
        width: 150, 
        height: 150
    }
});

export default Daughter;