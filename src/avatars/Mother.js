import React from "react";
import { StyleSheet, Image } from "react-native";

const Mother = ({ emotion }) => {
    const baseUrl = "../../assets/avatars/mother/";
    switch (emotion) {
        case 1:
            return <Image 
                source={require(baseUrl + "1.png")}
                style={[styles.image]} />;
        case 2:
            return <Image 
                source={require(baseUrl + "2.png")}
                style={[styles.image]} />;
        case 3:
            return <Image 
                source={require(baseUrl + "3.png")}
                style={[styles.image]} />;
        case 4:
            return <Image 
                source={require(baseUrl + "4.png")}
                style={[styles.image]} />;
       default:
            return <Image 
                source={require(baseUrl + "1.png")}
                style={[styles.image]} />;
    }
};

const styles = StyleSheet.create({
    image: {
        width: 150, 
        height: 150
    }
});

export default Mother;