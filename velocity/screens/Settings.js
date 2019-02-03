import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  settings: {
    flex: 1
  }
});

class Settings extends Component {
  render() {
    return (
      <View style={styles.settings}>
        <Text> Settings </Text>
      </View>
    )
  }
}

export default Settings;