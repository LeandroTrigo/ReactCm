import React from 'react';
import {View,StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainActivity from "./screens/MainActivity";
import Anonimo from "./screens/Anonimo";

export default class App extends React.Component {

  constructor(props) {
    super(props);
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

          <Stack.Screen name="Anon">
            {props => <Anonimo {...props} />}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </View>      

  );
}
}