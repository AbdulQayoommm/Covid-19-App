import React, { Component } from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { Image, View } from 'react-native'
export default class CardHeaderFooterExample extends Component {
    render() {
        return (
            <View>
                <Card style={{ width: 330, marginLeft: 16 }}>
                    <CardItem>
                        <Image source={{ uri: 'https://img.favpng.com/10/14/22/hand-washing-hygiene-soap-clip-art-png-favpng-6cWEdyxGwqjMShAt3YERvfGdw_t.jpg' }}
                            style={{ width: 300, height: 200 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontSize: 20, marginLeft: 80 }}>
                                Wash Your Hands
                </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{ width: 330, marginLeft: 16 }}>
                    <CardItem>
                        <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20200307/ourmid/pngtree-n95-mask-disposable-blue-mask-png-image_2157721.jpg' }}
                            style={{ width: 300, height: 200 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontSize: 20, marginLeft: 80 }}>
                                Use Face Mask
                </Text>
                        </Body>
                    </CardItem>

                </Card>
                <Card style={{ width: 330, marginLeft: 16 }}>
                    <CardItem>
                        <Image source={{ uri: 'https://www.pngjoy.com/pngm/196/3852072_doctor-clipart-go-to-the-doctor-clipart-hd.png' }}
                            style={{ width: 300, height: 200 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontSize: 20, marginLeft: 80 }}>
                                Go to The Doctor
                </Text>
                        </Body>
                    </CardItem>

                </Card>
            </View>
        );
    }
}