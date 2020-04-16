import * as React from 'react';
import {View, Text, TouchableOpacity,FlatList} from 'react-native';
import Styles from '../styles/Styles'
import CustomRow from '../components/CustomRow'

var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            console.log(date);


const itemList = [
    {
      description: 'bd7acbea-c1b1-46c2-aed5-3ad53abblkskdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaçççççlkçadadadadadadadadadadadadadad28ba',
      title: date
    },
    {
      description: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: date
    },
    {
      description: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: date
    },
    {
      description: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: date
    },
    {
      description: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: date
    },
    {
      description: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: date
    },
    {
      description: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: date
    },
  ];

export default class NotasScreen extends React.Component {

  constructor(props) {
    super(props);

    this.addNota = this.addNota.bind(this);

    this.state = {
      navigation: props.navigation,
    };
  }

  addNota(){
    console.log("YES")
  }

  render(){

    return (
      <View>
        <FlatList
                style={{height: "87%"}}
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    description={item.description}
                />}
            />
        <TouchableOpacity  
        style={Styles.buttonaddnota}
        onPress ={this.addNota}>
        <Text style={Styles.ButtonsText}>
                          Adiciona Nova Nota
                      </Text>
        </TouchableOpacity>
      </View>
    );
  }}