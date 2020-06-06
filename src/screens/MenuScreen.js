import React from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import Daughter from "../avatars/Daughter";
import Mother from "../avatars/Mother";

const MenuScreen = ({ navigation }) => {
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
    <ScrollView>
        <View style={[styles.column, styles.margin]}>
            <View style={styles.margin}>
                <Button 
                    style={styles.text} 
                    title="Play as mother" 
                    onPress={() => {navigation.navigate("Home")}}/>
                <Mother />
            </View>
            <View style={styles.margin}>
                <Button 
                    style={styles.text} 
                    title="Play as daughter" 
                    onPress={() => {navigation.navigate("Home")}}/>
                <Daughter />
            </View>
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
    marginVertical: 20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  column: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default MenuScreen;