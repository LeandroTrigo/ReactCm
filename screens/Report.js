import React from 'react';
import { View, Text } from "react-native";

export default class Report extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        navigation: props.navigation,
        idUser: props.idUser,
        Nome: props.Nome
      };
  
    }

    render(){

        
        console.log("ID USER: " + this.state.idUser)
        console.log("NOME USER: " + this.state.Nome)

        return(
            <View>
                <Text>
                    MAPA
                </Text>
            </View>
        )
    }

}