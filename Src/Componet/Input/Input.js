import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'native-base';
export default class Inputs extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Icon name="arrow-forward" style={styles.icons} name={this.props.name} type={this.props.type} />
        <TextInput style={styles.input} secureTextEntry={this.props.secureTextEntry} onChangeText = {(text) => this.props.InputHandler(text,this.props.placeHolder)} placeholder={this.props.placeHolder} />
      </View>
    );
  }
}
const styles = StyleSheet.create({

  input: {
    width: 300,
  },
  view: {
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 300,
    borderRadius: 30,
    flexDirection: "row"
  },
  icons: {
    marginTop: 10,
    marginLeft: 10
  }
});