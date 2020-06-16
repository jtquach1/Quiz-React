import React from "react";
import { StyleSheet, Image } from "react-native";

const Mother = ({ emotion }) => {
    const baseUrl = "../../assets/avatars/mother/";
    switch (emotion) {
        case 1:
            return <Image 
                source={require(baseUrl + "1.gif")}
                style={[styles.image]} />;
        case 2:
            return <Image 
                source={require(baseUrl + "2.gif")}
                style={[styles.image]} />;
        case 3:
            return <Image 
                source={require(baseUrl + "3.gif")}
                style={[styles.image]} />;
        case 4:
            return <Image 
                source={require(baseUrl + "4.gif")}
                style={[styles.image]} />;
        case 5:
            return <Image 
                source={require(baseUrl + "5.gif")}
                style={[styles.image]} />;
        case 6:
            return <Image 
                source={require(baseUrl + "6.gif")}
                style={[styles.image]} />;
        case 7:
            return <Image 
                source={require(baseUrl + "7.gif")}
                style={[styles.image]} />;
       default:
            return <Image 
                source={require(baseUrl + "/png/1.png")}
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