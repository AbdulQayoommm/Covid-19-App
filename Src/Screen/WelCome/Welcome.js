import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
class Home extends React.Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://www.insidehighered.com/sites/default/server_files/media/sample-4_2.png' }}
          style={{ width: 350, height: 300, marginBottom: 2, marginTop: 150 }}
        />
        <Text style={{ fontSize: 30, alignSelf: 'center' }}>Welcome COVID-19 App</Text>
        <Button onPress={() => this.props.navigation.navigate("Home")} full light style={{ backgroundColor: "#af111c", marginTop: 25, borderRadius: 20, width: 300, alignSelf: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Get Started</Text>
        </Button>
      </View>
    );
  }
}
export default Home;



