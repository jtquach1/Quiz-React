import React from "react";
import { StyleSheet, Image } from "react-native";

const Mother = () => {
    return (
        <Image 
            source={{uri: "http://avataaars.io/png?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=Red&clotheType=CollarSweater&eyeType=Default&eyebrowType=Default&facialHairType=Blank&hairColor=Black&mouthType=Default&skinColor=DarkBrown&topType=LongHairCurly"}} 
            style={[styles.image]}/>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150, 
        height: 150
    }
});

export default Mother;