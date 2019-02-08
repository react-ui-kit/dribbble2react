import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as theme from '../constants/theme';

export default class Typography extends Component {
  render() {
    const {
      center,
      right,
      color,
      size,
      height,
      weight,
      spacing,
      h1,
      h2,
      h3,
      h4,
      paragraph,
      caption,
      medium,
      bold,
      light,
      italic,
      button,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      paragraph && styles.paragraph,
      paragraph && color === 'gray' && styles.paragraphGray,
      paragraph && color === 'gray2' && styles.paragraphGray2,
      caption && styles.caption,
      caption && medium && styles.captionMedium,
      button && styles.button,
      center && styles.center,
      right && styles.right,
      color && { color },
      color && color === 'blue' && styles.blue,
      color && color === 'lightblue' && styles.lightblue,
      color && color === 'green' && styles.green,
      color && color === 'red' && styles.red,
      color && color === 'yellow' && styles.yellow,
      color && color === 'teal' && styles.teal,
      color && color === 'black' && styles.black,
      color && color === 'black2' && styles.black2,
      color && color === 'black3' && styles.black3,
      color && color === 'white' && styles.white,
      color && color === 'gray' && styles.gray,
      color && color === 'gray2' && styles.gray2,
      color && color === 'gray3' && styles.gray3,
      color && color === 'caption' && styles.caption,
      size && { fontSize: size },
      bold && styles.bold,
      light && styles.light,
      height && { lineHeight: height },
      weight && { fontWeight: weight },
      spacing && { letterSpacing: spacing },
      style
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Rubik-Regular',
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
  bold: { fontFamily: 'Rubik-Bold' },
  light: { fontFamily: 'Rubik-Light' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  blue: { color: theme.colors.blue, },
  lightblue: { color: theme.colors.lightblue, },
  green: { color: theme.colors.green, },
  red: { color: theme.colors.red, },
  yellow: { color: theme.colors.yellow, },
  teal: { color: theme.colors.teal, },
  black: { color: theme.colors.black, },
  black2: { color: theme.colors.black2, },
  black3: { color: theme.colors.black3, },
  white: { color: theme.colors.white, },
  gray: { color: theme.colors.gray, },
  gray2: { color: theme.colors.gray2, },
  gray3: { color: theme.colors.gray3, },
  caption: { color: theme.colors.caption, },
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  h4: theme.fonts.h4,
  paragraph: theme.fonts.paragraph,
  paragraphGray: theme.fonts.paragraphGray,
  paragraphGray2: theme.fonts.paragraphGray2,
  caption: theme.fonts.caption,
  captionMedium: theme.fonts.captionMedium,
  button: theme.fonts.button,
});
