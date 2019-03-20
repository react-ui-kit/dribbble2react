// just copy this code from the driving repo :)
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { theme } from "../constants";

export default class Block extends Component {
  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      top,
      bottom,
      card,
      shadow,
      color,
      space,
      style,
      children,
      ...props
    } = this.props;

    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === false && { flex: 0 }, // reset / disable flex
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
      card && styles.card,
      shadow && styles.shadow,
      space && { justifyContent: `space-${space}` },
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style, // rewrite predefined styles
    ];

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: theme.sizes.border,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
  },
  accent: { backgroundColor: theme.colors.accent, },
  primary: { backgroundColor: theme.colors.primary, },
  secondary: { backgroundColor: theme.colors.secondary, },
  tertiary: { backgroundColor: theme.colors.tertiary, },
  black: { backgroundColor: theme.colors.black, },
  white: { backgroundColor: theme.colors.white, },
  gray: { backgroundColor: theme.colors.gray, },
  gray2: { backgroundColor: theme.colors.gray2, },
  gray3: { backgroundColor: theme.colors.gray3, },
  gray4: { backgroundColor: theme.colors.gray4, },
})