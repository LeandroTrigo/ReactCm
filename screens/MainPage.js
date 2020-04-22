import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from "react-native-elements";
import {DrawerContentMain} from '../components/DrawerContentMain';
import styles from '../styles/Styles'
import Languages from '../components/Language'
import Report from '../screens/Report'
import Reports from '../screens/Reports'
import Suporte from '../screens/Suporte'
import Creditos from '../screens/Creditos'
import Defenicoes from '../screens/Defenicoes'


const Drawer = createDrawerNavigator();

const ReportStack = createStackNavigator();

const ReportStackScreen = ({navigation }) => (
  <ReportStack.Navigator>
    <ReportStack.Screen name={Languages.t('report')} component={Report} 
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
  </ReportStack.Navigator>
)



const ReportsStack = createStackNavigator();

const ReportsStackScreen = ({navigation }) => (
  <ReportsStack.Navigator>
    <ReportStack.Screen name={Languages.t('reports')} component={Reports} 
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
  </ReportsStack.Navigator>
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



export default function MainPage(){
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContentMain {...props}/>}>
      <Drawer.Screen name="Report" component={ReportStackScreen} />
      <Drawer.Screen name="Reports" component={ReportsStackScreen} />
      <Drawer.Screen name="Sup" component={SuporteStackScreen} />
      <Drawer.Screen name="Credits" component={CreditosStackScreen} />
      <Drawer.Screen name="Defs" component={DefenicoesStackScreen} />
    </Drawer.Navigator>
    );
  }