import React from "react";
import { Text, StyleSheet, View, Button, ScrollView } from "react-native";
import Daughter from "../components/Daughter";
import Mother from "../components/Mother";

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
    <ScrollView style={[styles.marginHorizontal]}>
      <Text style={[styles.text, styles.marginVertical]}>Quiz Demos</Text>
      {makeButton(1)}
      {makeButton(2)}
      {makeButton(3)}
      {makeButton(4)}
      {makeButton(5)}
      {makeButton(6)}
      {makeButton(7)}
    </ScrollView>
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
  marginHorizontal: {
    marginHorizontal: 20,
  },
  marginVertical: {
    marginVertical: 20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});

export default HomeScreen;