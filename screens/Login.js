import * as React from 'react';
import {View, Text} from 'react-native';

export default class Login extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        navigation: props.navigation,
      };
    
    }

render(){
    return (
        <View>
            <Text>LOGIN</Text>
        </View>
    )
}

}