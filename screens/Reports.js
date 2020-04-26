import React from 'react';
import { View, Text } from "react-native";

export default class Reports extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        navigation: props.navigation,
      };
  
    }

    render(){
        return(
            <View>
                <Text>
                    OS MEUS PONTOS
                </Text>
            </View>
        )
    }

}