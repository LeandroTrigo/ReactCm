import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Notas from '../screens/Notas'
import Suporte from '../screens/Suporte'
import Creditos from '../screens/Creditos'
import Defenicoes from '../screens/Defenicoes'
import { Icon } from "react-native-elements";
import {DrawerContent} from '../components/DrawerContent';
import styles from '../styles/Styles'
import Languages from '../components/Language'

const Drawer = createDrawerNavigator();

const NotasStack = createStackNavigator();

const NotasStackScreen = ({navigation }) => (
  <NotasStack.Navigator>
    <NotasStack.Screen name={Languages.t('notas')} component={Notas} 
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



const SuporteStack = createStackNavigator();

const SuporteStackScreen = ({navigation }) => (
  <SuporteStack.Navigator>
    <SuporteStack.Screen name={Languages.t('suporte')} component={Suporte} 
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
  </SuporteStack.Navigator>
)

const CreditosStack = createStackNavigator();

const CreditosStackScreen = ({navigation }) => (
  <CreditosStack.Navigator>
    <CreditosStack.Screen name={Languages.t('creditos')} component={Creditos} 
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
  </CreditosStack.Navigator>
)


const DefenicoesStack = createStackNavigator();

const DefenicoesStackScreen = ({navigation }) => (
  <DefenicoesStack.Navigator>
    <DefenicoesStack.Screen name={Languages.t('defenicoes')} component={Defenicoes} 
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
  </DefenicoesStack.Navigator>
)

export default function Anonimo(){
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="NotasAnonimo" component={NotasStackScreen} />
      <Drawer.Screen name="Sup" component={SuporteStackScreen} />
      <Drawer.Screen name="Credits" component={CreditosStackScreen} />
      <Drawer.Screen name="Defs" component={DefenicoesStackScreen} />
    </Drawer.Navigator>
    );
  }