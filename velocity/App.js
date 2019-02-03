import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/Base/Logo.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
        'Rubik-BlackItalic': require('./assets/fonts/Rubik-BlackItalic.ttf'),
        'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
        'Rubik-BoldItalic': require('./assets/fonts/Rubik-BoldItalic.ttf'),
        'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
        'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
        'Rubik-LightItalic': require('./assets/fonts/Rubik-LightItalic.ttf'),
        'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
        'Rubik-MediumItalic': require('./assets/fonts/Rubik-MediumItalic.ttf'),
        'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
