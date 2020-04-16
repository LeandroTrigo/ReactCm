import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Notas from '../screens/Notas'
import { Icon } from "react-native-elements";
import {DrawerContent} from '../components/DrawerContent';
import styles from '../styles/Styles'

const Drawer = createDrawerNavigator();

const NotasStack = createStackNavigator();

const NotasStackScreen = ({navigation }) => (
  <NotasStack.Navigator>
    <NotasStack.Screen name="Notas" component={Notas} 
    options={{
    headerStyle:{
      backgroundColor: '#090459'
    },
    headerTitleAlign: "left",
    headerTintColor: "#fff",
    headerLeft: () => (
      <TouchableOpacity
      style={styles.buttonnav}>
      <Icon
        name='ios-menu'
        type='ionicon'
        color='#fff'
        onPress={() => navigation.openDrawer()}
      />
      </TouchableOpacity>
    ),
  }}/>
  </NotasStack.Navigator>
)

export default function Anonimo(){
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="NotasAnonimo" component={NotasStackScreen} />
    </Drawer.Navigator>
    );
  }