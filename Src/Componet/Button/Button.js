import React, { Component } from 'react';
import { Button, Text } from 'native-base';
export default class ButtonFullExample extends Component {
  render() {
    return (
      <Button onPress={this.props.navigation} full light style={{ backgroundColor: "#af111c", marginTop: 25, borderRadius: 20, width: 300, alignSelf: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.props.name}</Text>
      </Button>
    );
  }
}