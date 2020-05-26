import React from "react";
import { Text, StyleSheet, View, Button, ScrollView, SafeAreaView } from "react-native";

const HomeScreen = ({ navigation }) => {
  const makeButton = (id) => {
    return (
      <Button 
        onPress={() => {
          navigation.navigate("Quiz", {
            itemId: id,
          });
        }}
        title={"Scenario " + id} 
      />
    );
  }


  // Generate scenarios based on id
  return (
    <View style={styles.padding}>
      <Text style={[styles.text, styles.margin]}>Quiz Demos</Text>
      {makeButton(1)}
      {makeButton(2)}
      {makeButton(3)}
      {makeButton(4)}
      {makeButton(5)}
      {makeButton(6)}
      {makeButton(7)}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  margin: {
    marginBottom: 20
  }
});

export default HomeScreen;