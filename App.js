import React from 'react';
import {View,StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainActivity from "./screens/MainActivity";
import Anonimo from "./screens/Anonimo";
import Login from "./screens/Login"
import MainPage from "./screens/MainPage"

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleIdUser = this.handleIdUser.bind(this);
    this.handleNomeUser = this.handleNomeUser.bind(this);

    this.state = {
      idUser: -1,
      Nome: ""
    }


  }


    
 handleIdUser(valor) {
  this.setState({idUser: valor})
}

handleNomeUser(valor){
  this.setState({Nome: valor})
}

  
  render(){

  const Stack = createStackNavigator();

  return (
    <View style={{width: "100%", height: "100%"}}>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Main">
            {props => <MainActivity {...props} />}
          </Stack.Screen>

          <Stack.Screen name="MainPage">
            {props => <MainPage {...props} idUser={this.state.idUser} Nome={this.state.Nome} />}
          </Stack.Screen>

          <Stack.Screen name="Anon">
            {props => <Anonimo {...props} />}
          </Stack.Screen>
          
          <Stack.Screen name="Login">
            {props => <Login {...props}  handleIdUser={this.handleIdUser} handleNomeUser={this.handleNomeUser}  />}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </View>      

  );
}
}