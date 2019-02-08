import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Block from './Block';
import Text from './Text';
import Icon from './Icon';
import * as theme from '../constants/theme';

export default class Card extends Component {
  static defaultProps = {
    shadow: true,
    border: true,
    title: null,
  }

  renderHeader = () => {
    const { title } = this.props;
    if (!title) return null;

    return (
      <Block row space="between" style={styles.header}>
        <Text caption>{title}</Text>
        <TouchableOpacity>
          <Icon options />
        </TouchableOpacity>
      </Block>
    )
  }

  render() {
    const { shadow, border, style, children, ...props } = this.props;
    const cardStyles = [
      styles.card,
      shadow && styles.shadow,
      border && styles.border,
      style,
    ];

    return (
      <Block style={cardStyles} {...props}>
        {this.renderHeader()}
        {children}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 25,
    backgroundColor: theme.colors.white,
  },
  header: {
    paddingBottom: 24,
  },
  border: {
    borderColor: theme.colors.card,
    borderWidth: 1,
  },
  shadow: {
    shadowColor: theme.colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
  }
});
