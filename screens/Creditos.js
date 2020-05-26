import * as React from 'react';
import { View, Text, Image } from 'react-native';
import ImageCredit from '../assets/creditos.png';
import Languages from '../components/Language';
import * as ScreenOrientation from 'expo-screen-orientation';
import { DeviceMotion } from 'expo-sensors';

export default class CreditosScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentOrientation: 0
        }

    }

    componentDidMount() {
        ScreenOrientation.unlockAsync();

        DeviceMotion.addListener(({ rotation }) => {
            ScreenOrientation.getOrientationAsync().then(data => this.setState({ currentOrientation: data }));
        })
    }

    render() {
        return (
            <View>
                {this.state.currentOrientation == 1 &&
                    <View>
                        <View style={{ alignSelf: "center", justifyContent: "center" }}>
                            <Image
                                source={ImageCredit}
                                style={{ height: 180, width: 300, alignSelf: "center", marginTop: 100 }}
                            ></Image>
                            <Text style={{ textAlign: "center", fontSize: 16, marginTop: 16 }}>Leandro Wilson da Costa Trigo</Text>
                            <Text style={{ textAlign: "center", fontSize: 16 }}>{Languages.t('instituto')}</Text>
                            <Text style={{ textAlign: "center", fontSize: 16 }}>{Languages.t('grade')}</Text>
                        </View>
                    </View>}

                {this.state.currentOrientation != 1 &&
                    <View>
                        <View style={{flexDirection: "row" }}>
                            <View style={{width: "40%"}}>
                            <Image
                                source={ImageCredit}
                                style={{ height: 180, width: 300, alignSelf: "center", marginTop: 50 }}
                            ></Image>
                            </View>
                            
                            <View style={{width: "60%"}}>
                            <Text style={{ textAlign: "center", fontSize: 16, marginTop: 100 }}>Leandro Wilson da Costa Trigo</Text>
                            <Text style={{ textAlign: "center", fontSize: 16 }}>{Languages.t('instituto')}</Text>
                            <Text style={{ textAlign: "center", fontSize: 16 }}>{Languages.t('grade')}</Text>
                            </View>
                        </View>

                    </View>
                }


            </View>
        )
    }

}