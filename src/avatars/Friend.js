import React from "react";
import { StyleSheet, Image } from "react-native";

const Friend = () => {
    return (
        <Image 
            source={require("../../assets/avatars/friend/1.gif")} 
            style={[styles.image]}/>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150, 
        height: 150
    }
});

export default Friend;