import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Card from './../../Componet/Card/Card';
import AllDetail from './../../Componet/All Detail/AllDetail';
import { PieChart,} from "react-native-chart-kit";
import Header from './../../Componet/Header/Header'
export default class Home extends Component {
//Chart
constructor() {
    super();
    this.state = {
      confirmed: '',
      recovered: '',
      deaths: ''
    };
  }

  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
        });
        this.setState({});
      })
      .catch((err) => console.log('new error', err));
  };
  render() {
    let {confirmed,recovered,deaths} = this.state
    const data = [
      {
        name: "Confirmed",
        population: confirmed ? confirmed :0,
        color: "#5F9EA0",
        legendFontColor: "#5F9EA0",
        legendFontSize: 8
      },
      {
        name: "Recovered",
        population: recovered ? recovered :0,
        color: "#BC8F8F",
        legendFontColor: "#BC8F8F",
        legendFontSize: 8
      },
      {
        name: "Total Deaths",
        population: deaths ? deaths :0,
        color: "#FA8072",
        legendFontColor: "#FA8072",
        legendFontSize: 8
      },
    ];
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
        return (
            <>
            <Header navigation = {this.props.navigation}/>
            <ScrollView>
                <View>
                    <Image source={{ uri: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/Coronavirus_Patient_Doctors_1296x728-header-1.jpg?w=1155&h=1528' }}
                        style={{ width: 400, height: 200 }} />
                    <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 12, color: 'red' }}>Covid-19</Text>
                    <Text style={{ textAlign: 'center' }}>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Text>
                    <Text style={{ textAlign: 'center' }}>
                        Protect yourself and others around you by knowing the facts and taking appropriate precautions
                    </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 12, textAlign: 'center' }}>Follow advice provided by your local health authority.</Text>
                    <Card />
                    <AllDetail />


            {/* Chart */}
            <PieChart
              data={data}
              width={300}
              height={200}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />

                </View>
            </ScrollView>
            </>
        );
    }
}