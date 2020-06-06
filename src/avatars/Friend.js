import React from "react";
import { StyleSheet, Image } from "react-native";

const Friend = () => {
    return (
        <Image 
            source={{uri: "http://avataaars.io/png?avatarStyle=Transparent&clotheColor=PastelRed&clotheType=ShirtCrewNeck&eyebrowType=SadConcerned&hairColor=Auburn&mouthType=Sad&skinColor=Brown&topType=LongHairStraight"}} 
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