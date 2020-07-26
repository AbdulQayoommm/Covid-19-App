import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const App = (props) => {
  const [selectedValue, setSelectedValue] = useState('Pakistan');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 250}}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          props.ChangeCounrty(itemValue);
        }}>
        <Picker.Item label="Pakistan" value="Pakistan" />
        <Picker.Item label="Malaysia" value="Malaysia" />
        <Picker.Item label="Albania" value="Albania" />
        <Picker.Item label="Bangladesh" value="Bangladesh" />
        <Picker.Item label="Angola" value="Angola" />
        <Picker.Item label="Egypt" value="Egypt" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Mexico" value="Mexico" />
        <Picker.Item label="Belize" value="Belize" />
        <Picker.Item label="Nepal" value="Nepal" />
        <Picker.Item label="Oman" value="Oman" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="China" value="China" />
        <Picker.Item label="Qatar" value="Qatar" />
        <Picker.Item label="Russia" value="Russia" />

      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
});

export default App;