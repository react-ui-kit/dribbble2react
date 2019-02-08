import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import * as theme from '../constants/theme';

export default class Label extends Component {
  render() {
    const {
      blue,
      green,
      red,
      yellow,
      teal,
      purple,
      black,
      white,
      gray,
      color,
      style,
      children,
      ...props
    } = this.props;

    const labelStyles = [
      styles.label,
      color && { backgroundColor: color },
      blue && { backgroundColor: theme.colors.blue },
      green && { backgroundColor: theme.colors.green },
      red && { backgroundColor: theme.colors.red },
      yellow && { backgroundColor: theme.colors.yellow },
      teal && { backgroundColor: theme.colors.teal },
      purple && { backgroundColor: theme.colors.purple },
      black && { backgroundColor: theme.colors.black },
      white && { backgroundColor: theme.colors.white },
      gray && { backgroundColor: theme.colors.gray },
      style,
    ];

    return (
      <View style={labelStyles} {...props}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    margin: 4,
    width: 12,
    height: 12,
    borderRadius: 12,
  },
});
