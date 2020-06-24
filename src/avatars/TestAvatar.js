import React from "react";
import { StyleSheet, Image } from "react-native";

const TestAvatar = () => {
  return (
    <Image
      source={{ uri: "http://avataaars.io/png?accessoriesType=Round&avatarStyle=Transparent&clotheColor=White&clotheType=ShirtCrewNeck&eyebrowType=UpDown&hairColor=BlondeGolden&mouthType=Smile&skinColor=Pale&topType=LongHairStraightStrand" }}
      style={[styles.image]} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  }
});

export default TestAvatar;
