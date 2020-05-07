import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.padding}>
      <Text style={[styles.text, styles.margin]}>Quiz Demo</Text>
      <Button 
        onPress={() => navigation.navigate("Quiz") }
        title="Go to Quiz Demo" 
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
    // marginHorizontal: 20,
    // marginVertical: 20,
    marginBottom: 20
  }
});

export default HomeScreen;