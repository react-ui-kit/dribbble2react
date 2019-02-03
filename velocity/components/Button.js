import React, { Component } from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import * as theme from '../constants/theme';

const { width } = Dimensions.get('window');

export default class Button extends Component {
  render() {
    const { style, full, opacity, children, ...props } = this.props;
    const buttonStyles = [
      styles.button,
      full && styles.full,
      style,
    ];

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.blue,
    borderRadius: 4,
    height: 55,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  full: {
    width: width - 50,
  }
});
