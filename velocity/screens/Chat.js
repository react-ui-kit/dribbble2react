import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chat: {
    flex: 1
  }
});

class Chat extends Component {
  render() {
    return (
      <View style={styles.chat}>
        <Text> Chat </Text>
      </View>
    )
  }
}

export default Chat;