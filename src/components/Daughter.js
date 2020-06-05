import React from "react";
import { StyleSheet, Image } from "react-native";

// To destructure, use { arg1, arg2, ... } format, 
// and in parent, do <Daughter arg1=... arg2=... /> 
const Daughter = () => {
    return (
        <Image 
            source={{uri: "http://avataaars.io/png?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=PastelOrange&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&facialHairType=Blank&hairColor=Black&mouthType=Default&skinColor=DarkBrown&topType=LongHairBigHair"}} 
            style={[styles.image]}/>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150, 
        height: 150
    }
});

export default Daughter;