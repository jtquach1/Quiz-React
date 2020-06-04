import React from "react";
import { Text, StyleSheet, View, Button, ScrollView, SafeAreaView } from "react-native";
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
    <ScrollView style={[styles.margin]}>
      <Text style={[styles.text, styles.margin]}>Quiz Demos</Text>
      {makeButton(1)}
      {makeButton(2)}
      {makeButton(3)}
      {makeButton(4)}
      {makeButton(5)}
      {makeButton(6)}
      {makeButton(7)}
      <View style={[styles.row]}>
        <Daughter />
        <Mother />
      </View>
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
  margin: {
    marginHorizontal: 20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});

export default HomeScreen;