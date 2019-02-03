import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text, Input } from '../components';

const styles = StyleSheet.create({
  forgot: {
    flex: 1
  }
});

class Forgot extends Component {
  render() {
    return (
      <Block center middle>
        <Text> Forgot </Text>
      </Block>
    )
  }
}

export default Forgot;