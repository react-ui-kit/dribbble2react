import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loading: {
    flex: 1
  }
});

class Loading extends Component {
  render() {
    return (
      <View style={styles.loading}>
        <Text> Loading </Text>
      </View>
    )
  }
}

export default Loading;