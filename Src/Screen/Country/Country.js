import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CountryPicker from './../../Componet/Country Picker/CountryPicker';
import Card from './../../Componet/Card for DropDown/CardForDropDown';
class Acount extends React.Component {
  constructor() {
    super();
    this.state = {
      country: 'Pakistan',
    };
  }
  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api/countries/Pakistan', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
        });
      })
      .catch((err) => console.log('new error', err));
  };
  ChangeCounrty = async (country) => {
      console.log(country)
    await fetch(`https://covid19.mathdro.id/api/countries/${country}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
          country,
        });
      })
      .catch((err) => console.log('new error', err));
  };
  render() {
      console.log(this.state)
    return (
      <View>
        <CountryPicker ChangeCounrty={this.ChangeCounrty} />
        <View style={styles.card}>
          <Text style={styles.total}>
            Total Detail About {this.state.country}
          </Text>
          <Card
            name="Conformed"
            confirmed={this.state.confirmed}
            recovered={this.state.recovered}
            deaths={this.state.deaths}
            color="white"
            background="black"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 20,
    marginBottom: 50,
  },
  total: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B80E17',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Acount;