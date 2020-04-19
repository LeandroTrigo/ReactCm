import React from 'react';
import {Text, View, Image,StyleSheet, Button,TouchableOpacity, StatusBar, EventEmitter } from 'react-native';
import Styles from '../styles/Styles'
import Logo from '../assets/logo.png'

console.disableYellowBox = true;

export default class MainActivity extends React.Component{

  constructor(props) {
    super(props);

    this.enterAnonimo = this.enterAnonimo.bind(this);

    this.state = {
      navigation: props.navigation,
    };
  }

  enterAnonimo(){
    this.state.navigation.navigate("Anon");
  }


  render(){
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
         <Image style={Styles.Logo}
                    source={Logo}
                  ></Image>
        <Text style={Styles.Title}>Go Around</Text>
        <TouchableOpacity
                    style={Styles.Buttons}
                    //onPress ={this.login}
                  >
                      <Text style={Styles.ButtonsText}>
                          Entrar com Conta
                      </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={Styles.Buttons}
                    onPress ={this.enterAnonimo}
                  >
                      <Text style={Styles.ButtonsText}>
                          Entrar como Anónimo
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
