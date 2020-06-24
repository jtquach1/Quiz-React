import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
  state = {
    answer: '',
  }
  handleAnswer = (text) => {
    this.setState({ answer: text })
  }
  login = (answer) => {
    alert('Custom answer: ' + answer)
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Custom answer"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleAnswer} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.answer)
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Inputs

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    paddingLeft: 10
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
})
