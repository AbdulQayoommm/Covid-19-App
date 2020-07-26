import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import { View } from 'react-native'
export default class CardExample extends Component {
    constructor() {
        super();
        this.state = {
            confirmed: '',
            recovered: '',
            deaths: ''
        }
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

        return (
            <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>All Detail About Covid Patient</Text>

                {/* Confirmed Cases */}
                <Card style={{ width: 270, marginLeft: 25 ,borderRadius: 30 }}>
                    <CardItem style={{ backgroundColor: '#5F9EA0' ,borderRadius: 30 }}>
                        <Body>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 23 }}>Confirmed</Text>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>{this.props.confirmed}</Text>
                        </Body>
                    </CardItem>
                </Card>

                {/* Total Deaths */}
                <Card style={{ width: 270, marginLeft: 25 ,borderRadius: 30 }}>
                    <CardItem style={{ backgroundColor: '#FA8072',borderRadius: 30 }}>
                        <Body>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>Deaths</Text>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>{this.props.deaths}</Text>
                        </Body>
                    </CardItem>
                </Card>
                
                {/* Total Recoverd */}
                <Card style={{ width: 270, marginLeft: 25 ,borderRadius: 30 }}>
                    <CardItem style={{ backgroundColor: '#BC8F8F',borderRadius: 30  }}>
                        <Body>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>Recoverd</Text>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>{this.props.recovered}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}