import { StyleSheet } from 'react-native';
import * as theme from '../../Theme';

const styles = StyleSheet.create({
    flex: {
      flex: 0,
    },
    column: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    },
    header: {
      paddingHorizontal: theme.sizes.padding,
      paddingTop: theme.sizes.padding,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    },
    back: {
      width: theme.sizes.base * 3,
      height: theme.sizes.base * 3,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    content: {
      // backgroundColor: theme.colors.active,
      // borderTopLeftRadius: theme.sizes.radius,
      // borderTopRightRadius: theme.sizes.radius,
    },
    contentHeader: {
      backgroundColor: 'transparent',
      padding: theme.sizes.padding,
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: theme.sizes.radius,
      borderTopRightRadius: theme.sizes.radius,
      marginTop: -theme.sizes.padding / 2,
    },
    avatar: {
      position: 'absolute',
      top: -theme.sizes.margin,
      right: theme.sizes.margin,
      width: theme.sizes.padding * 2,
      height: theme.sizes.padding * 2,
      borderRadius: theme.sizes.padding,
    },
    shadow: {
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    dotsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 36,
      right: 0,
      left: 0
    },
    dots: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 6,
      backgroundColor: theme.colors.gray,
    },
    title: {
      fontSize: theme.sizes.font * 2,
      fontWeight: 'bold'
    },
    description: {
      fontSize: theme.sizes.font * 1.2,
      lineHeight: theme.sizes.font * 2,
      color: theme.colors.caption
    }
  });

  export default styles;
