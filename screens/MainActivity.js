import React from 'react';
import {Text, View, Image,StyleSheet, Button,TouchableOpacity, StatusBar, EventEmitter } from 'react-native';
import Styles from '../styles/Styles'
import Logo from '../assets/logo.png'
import Languages from '../components/Language'
import * as ScreenOrientation from 'expo-screen-orientation';
import { DeviceMotion } from 'expo-sensors';

console.disableYellowBox = true;

let ecran;

export default class MainActivity extends React.Component{

  constructor(props) {
    super(props);

    this.enterAnonimo = this.enterAnonimo.bind(this);
    this.enterLogin = this.enterLogin.bind(this);

    this.state = {
      navigation: props.navigation,
      currentOrientation: 0,
    };
  }

  enterAnonimo(){
    this.state.navigation.navigate("Anon");
  }

  enterLogin(){
    this.state.navigation.navigate("Login");
  }
  
  componentDidMount() {
    ScreenOrientation.unlockAsync();


   DeviceMotion.addListener(({rotation}) => {
    ScreenOrientation.getOrientationAsync().then(data => this.setState({currentOrientation: data}));

     if(this.state.currentOrientation == 1){
        ecran = <Image style={Styles.Logo}
        source={Logo}
      ></Image>
     }
     else{
      ecran = <Image style={{
        height: 150,
        width: 150,
      marginTop: 16}}
      source={Logo}
    ></Image>
     }
    });

  }




  render(){

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
       {ecran}
       <Text style={Styles.Title}>Go Around</Text>
        <TouchableOpacity
                    style={Styles.Buttons}
                    onPress ={this.enterLogin}
                  >
                      <Text style={Styles.ButtonsText}>
                         {Languages.t('conta')}
                      </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={Styles.Buttons}
                    onPress ={this.enterAnonimo}
                  >
                      <Text style={Styles.ButtonsText}>
                         {Languages.t('anonimo')}
                      </Text>
                  </TouchableOpacity>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
