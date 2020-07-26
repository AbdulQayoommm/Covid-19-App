import React from 'react';
import {
  View,AppRegistry
} from 'react-native';
import StactNavigation from './Src/Navigations/Stack Navigation/Navigation'

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StactNavigation />
      </View>
    );
  };
}

export default App;
AppRegistry.registerComponent('App', () => App);
