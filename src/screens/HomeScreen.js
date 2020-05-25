import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  // Generate scenarios based on id
  return (
    <View style={styles.padding}>
      <Text style={[styles.text, styles.margin]}>Quiz Demos</Text>
      <Button 
        onPress={() => {
          navigation.navigate("Quiz", {
            itemId: 1,
          });
        }}
        title="Scenario 1" 
      />
      <Button 
        onPress={() => {
          navigation.navigate("Quiz", {
            itemId: 2,
          });
        }}
        title="Scenario 2" 
      />
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